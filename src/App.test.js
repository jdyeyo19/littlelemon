import { render, screen } from '@testing-library/react';
import Hero from './components/Hero';

test('Renders the BookingForm heading', () => {
    render(<Hero />);
    const headingElement = screen.getByText("Little Lemon");
    expect(headingElement).toBeInTheDocument();
})
