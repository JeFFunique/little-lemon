import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { fireEvent } from '@testing-library/react';
test('if heading choose time is here',() => {
  const form = {
    date: '',
    time: '17:00',
    nb_guests: 1,
    occasion: 'Birthday',
  };

  const availableTimes = {
    date:'',
    list_available_times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
  };

  // Render the component with the necessary props
  render(
    <BookingForm
      form={form}
      available_times={availableTimes}
      handleChange={jest.fn()}
      handleSubmit={jest.fn()}
    />
  );
expect(screen.getByLabelText(/Choose Date/i)).toBeInTheDocument();
});
test('if initialize_times has been correctly set out', () => {
  const form = {
    date: '',
    time: '17:00',
    nb_guests: 1,
    occasion: 'Birthday',
  };

  const availableTimes = {
    date:'',
    list_available_times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
  };

  // Render the component with the necessary props
  render(
    <BookingForm
      form={form}
      available_times={availableTimes}
      handleChange={jest.fn()}
      handleSubmit={jest.fn()}
    />)
    expect(screen.getByLabelText(/date/i).value).toBe(availableTimes.date);
availableTimes.list_available_times.forEach(time => {
  expect(screen.getByRole("option", { name:time })).toBeInTheDocument()
});
});
test('if updatetimes works fine', () => {
  const form = {
    date: '',
    time: '17:00',
    nb_guests: 1,
    occasion: 'Birthday',
  };

  const availableTimes = {
    date:'',
    list_available_times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
  };
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  // Render the component with the necessary props
  render(
    <BookingForm
      form={form}
      available_times={availableTimes}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />)
    const dateInput = screen.getByTestId("date-input");
    const timeSelect = screen.getByLabelText("Choose time");
    expect(dateInput.value).toBe("");
    expect(timeSelect.value).toBe("17:00");
    fireEvent.change(dateInput, { target: { value: '2025-05-01' } });
    fireEvent.change(timeSelect, { target: { value: '18:30' } });
    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(dateInput.value).toBe('2025-05-01');
    expect(timeSelect.value).toBe('18:30');
})

