import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm'
import { updateTimes } from './components/BookingForm';
import { seededRandom, fetchAPI, submitAPI } from 'https://raw.githubusercontent.com/courseraap/capstone/main/api.js'

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve Here!");
    expect(headingElement).toBeInTheDocument();
})
describe("updateTimes function", () => {

  test("returns empty array when day is 0", () => {
    expect(updateTimes(0)).toEqual([]);
  });

  test("returns correct times for days 1–5", () => {
    expect(updateTimes(3)).toEqual([
      "17:00", "18:30", "19:00", "20:00", "20:30", "22:00"
    ]);
  });

  test("returns correct times for days 16–20", () => {
    expect(updateTimes(18)).toEqual([
      "17:00", "18:30", "19:00", "20:00", "20:30", "22:00"
    ]);
  });

  test("returns correct times for days 6–10", () => {
    expect(updateTimes(8)).toEqual([
      "17:30", "18:00", "18:30", "19:30", "20:30", "21:00"
    ]);
  });

  test("returns correct times for days 11–15", () => {
    expect(updateTimes(12)).toEqual([
      "16:00", "17:30", "18:00", "19:30", "21:00", "21:30"
    ]);
  });

  test("returns undefined for invalid day (e.g., 32)", () => {
    expect(updateTimes(32)).toBeUndefined();
  });

});
describe("seededRandom", () => {

  test("returns a number between 0 and 1", () => {
    const random = seededRandom(5);
    const value = random();

    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThan(1);
  });

  test("produces deterministic results with same seed", () => {
    const random1 = seededRandom(10);
    const random2 = seededRandom(10);

    expect(random1()).toBe(random2());
    expect(random1()).toBe(random2());
  });

});
describe("fetchAPI", () => {

  test("returns an array", () => {
    const date = new Date("2024-05-10");
    const result = fetchAPI(date);

    expect(Array.isArray(result)).toBe(true);
  });

  test("returns deterministic results for same date", () => {
    const date = new Date("2024-05-15");

    const result1 = fetchAPI(date);
    const result2 = fetchAPI(date);

    expect(result1).toEqual(result2);
  });

  test("returns time strings in correct format", () => {
    const date = new Date("2024-05-20");
    const result = fetchAPI(date);

    result.forEach(time => {
      expect(time).toMatch(/^\d{2}:(00|30)$/);
    });
  });

  test("only returns times between 17:00 and 23:30", () => {
    const date = new Date("2024-05-25");
    const result = fetchAPI(date);

    result.forEach(time => {
      const hour = parseInt(time.split(":")[0], 10);
      expect(hour).toBeGreaterThanOrEqual(17);
      expect(hour).toBeLessThanOrEqual(23);
    });
  });

});
describe("updateTimes", () => {

  test("always returns true", () => {
    const mockFormData = {
      date: "2024-05-10",
      time: "18:00",
      guests: 4
    };

    expect(submitAPI(mockFormData)).toBe(true);
  });

});