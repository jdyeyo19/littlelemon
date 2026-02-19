import pescaito from "../Assets/pescaito.jpg";
import { useState } from "react";
import { Mail, SquarePlus, SquareMinus } from 'lucide-react';
import validator from 'validator';
import ReservationSuccess from "./ReservationSuccess";


export default function Reservation(){

    const [activereserve, setActiveReserve] = useState(JSON.parse(localStorage.getItem('reservation')))
    const [date, setDate] = useState(()=>{
        if(activereserve === null) return null;
        if(activereserve) return activereserve.date;
    })
    const [day, setDay] = useState(0)
    const [hour, setHour] = useState(()=>{
        if(activereserve === null) return "";
        if(activereserve) return activereserve.hour;
    })
    const [guest, setGuest] = useState(()=>{
        if(activereserve === null) return 2;
        if(activereserve) return activereserve.guest;
    })
    const [occasion, setOccasion] = useState(()=>{
        if(activereserve === null) return "None";
        if(activereserve) return activereserve.occasion;
    })
    const [email, setEmail] = useState(()=>{
        if(activereserve === null) return "";
        if(activereserve) return activereserve.email;
    })
    const [loader, setLoader] = useState(false)

    const [doingReserve, setDoingReserve] = useState(false);

    const handleDateChange = (e) => {
        setHour(""); // reset hora al cambiar fecha
        setLoader(true)
        const selectedDate = e.target.value;
        setTimeout(()=>{
            setDate(selectedDate)
            setDay(selectedDate.split("-")[2]);
            setLoader(false)
        },2200)
    };
    const guestHandlerPlus = () => {
        if(guest === 10) return;
        setGuest(guest + 1)
    }
    const guestHandlerMinus = () => {
        if(guest === 1) return;
        setGuest(guest - 1)
    }
    function occasionHandler(e){
        setOccasion(e.target.value)
    }
    const gooodToSend = date === null || hour === "" || validator.isEmail(email) === false;

    const handleSubmit = (e)=>{
        e.preventDefault();
        setDoingReserve(true);
        const reservationInfo = {
            date,
            hour,
            guest,
            occasion,
            email
        }
        localStorage.setItem('reservation',JSON.stringify(reservationInfo));
        setActiveReserve(JSON.parse(localStorage.getItem('reservation')));
        setTimeout(() => {
            setDoingReserve(false)
        }, 2200);
    }
    const onNewReservation = ()=>{
        localStorage.removeItem('reservation')
        setDoingReserve(true)
        setTimeout(() => {
            setActiveReserve(null)
            setDay(0)
            setDate(null)
            setGuest(2)
            setOccasion("None")
            setEmail("")
            setDoingReserve(false)
        }, 2200);
    }
    return(
        <section className="reservation">
            <ReserveHere />
            <div className="doingReserve">
                {doingReserve ? <Loader />: null}
            </div>
            {activereserve ? null: <form onSubmit={handleSubmit} className="reservation-form">
                <h2>Reserve Your Table!</h2>
                <h5>IMPORTANT: All fields are required!</h5>
                <ChooseDate handleDateChange={handleDateChange}/>
                {loader && <Loader loader={loader}/>}
                {!loader && < BookingSlot
                day={day}
                selectedHour={hour}
                onChange={setHour}
                />}
                <GuestsNumber
                guestHandlerPlus={guestHandlerPlus}
                guestHandlerMinus={guestHandlerMinus}
                guest={guest}
                />
                <Occasion occasionHandler={occasionHandler} occasion={occasion} />
                <Email setEmail={setEmail} email={email}/>
                <button type="submit" disabled={gooodToSend} onClick={handleSubmit}>Make Your reservation</button>
            </form>}
            {activereserve && !doingReserve ? <ReservationSuccess
                date={date}
                hour={hour}
                guests={guest}
                occasion={occasion}
                email={email}
                onNewReservation={onNewReservation}
            />: null}
        </section>
    )
}

{/*Reservation banner */}

function ReserveHere(){
    return(
        <div className="reserve-banner">
            <div className="reserve-info">
                <h1>Reserve Here!</h1>
                <p>Reserve Your Table,<br/>
                    Enjoy a seamless<br/>dining experience
                </p>
            </div>
            <div className="reserve-image">
                <img src={pescaito}/>
            </div>
        </div>
    )
}
{/*CHOOSE A DATE*/}
function ChooseDate ({handleDateChange}){
    const currentDate = new Date().toISOString().split('T')[0];
    return(
        <fieldset className="date-container">
            <legend htmlFor="res-date">Choose date</legend>
            <input
            type="date"
            id="res-date"
            onChange={handleDateChange}
            min={currentDate}/>
        </fieldset>
    )
}
{/*NUMBER OF GUESTS*/}
function GuestsNumber({guestHandlerPlus,guestHandlerMinus,guest}){
    return(
        <div className="guests-container">
            <label htmlFor="guests">Number of guests</label>
            <div className="guests-buttons">
                <span onClick={guestHandlerMinus}>{guest !== 1 && <SquareMinus fill="#f4ce14"/>}</span>
                <input type="number" value={guest} id="guests" readOnly/>
                <span onClick={guestHandlerPlus}>{guest !== 10 && <SquarePlus fill="#f4ce14"/>}</span>
            </div>
        </div>
    )
}
{/*OCCASION*/}
function Occasion({occasionHandler,occasion}){
    return(
        <fieldset className="occasion-container">
            <legend>Occasion</legend>
            <select id="occasion" value={occasion} onChange={occasionHandler}>
                <option value="None">None</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
        </fieldset>
    )
}
{/*EMAIL*/}
function Email({setEmail, email}){

    const [isValid, setIsValid] = useState(false);
    const [touched, setTouched] = useState(false);
    const handleBlur = () => {
    setTouched(true);
    };
    const showError = (touched && email !== "" && !isValid) || (touched && email === "");
    return(
        <fieldset className="email-container">
            <legend htmlFor="email">Email</legend>
            <div className="email-input-container">
                <Mail className="email-icon"/>
                <input
                type="email"
                id="email"
                placeholder="jhondoe@example.com"
                className="email-input"
                onChange={(e)=>{
                    setEmail(e.target.value)
                    setIsValid(validator.isEmail(e.target.value))
                }}
                onBlur={handleBlur}
                style={{
                    border: showError ? "2px solid red" : "1px solid #ccc",
                    outline: "none",
                }}
                />
            </div>
            {showError && <p className="error-message">Please enter a valid email address!!</p>}
        </fieldset>
    )
}
{/* Seleccionar franjas horairas */}
const BookingSlot = ({ day, selectedHour, onChange }) => {
  if (day === 0) return null;

  let hours = [];

  if ((day >= 1 && day <= 5) || (day >= 16 && day <= 20)) {
    hours = ["17:00", "18:30", "19:00", "20:00", "20:30", "22:00"];
  } else if ((day >= 6 && day <= 10) || (day >= 21 && day <= 25)) {
    hours = ["17:30", "18:00", "18:30", "19:30", "20:30", "21:00"];
  } else if ((day >= 11 && day <= 15) || (day >= 26 && day <= 31)) {
    hours = ["16:00", "17:30", "18:00", "19:30", "21:00", "21:30"];
  }

  return (
    <fieldset className="hours-container">
      <legend>Select an hour</legend>

      {hours.map((hour) => (
        <label key={hour} style={{ display: "block", marginBottom: 4 }}>
          <input
            type="radio"
            name="hour"
            value={hour}
            checked={selectedHour === hour}
            onChange={(e) => onChange(e.target.value)}
          />
          {` ${hour}`}
        </label>
      ))}
    </fieldset>
  );
};
{/*LOADER*/}
function Loader(){
        return(
        <div className="loader-container">
            <div className="loader"></div>
            <div className="loader-1"></div>
        </div>
    )
};