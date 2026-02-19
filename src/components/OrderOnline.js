import backgroundImage from "../Assets/restaurant.jpg";

export default function OrderOnline() {
  return (
    <section
      className="order-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="order-overlay">
        <div className="order-content">
          <h1>Order Online</h1>
          <p>
            We’re sorry, we’re still working on this section.
          </p>
          <p>
            Please place your order by calling us at{" "}
            <strong>312-456-7890</strong>.
          </p>
          <p className="discount">
            Say the phrase <span>"Crazy Bruschetta"</span> to receive
            10% off your order.
          </p>
        </div>
      </div>
    </section>
  );
}