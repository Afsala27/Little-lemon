import { fireEvent, render, screen } from "@testing-library/react";
import Bookingform from './Components/Bookingform';
import Main from "./Components/Main";

test('user has to select the timing as given', () => {
  const time= "";
  const handleSubmit = jest.fn();
  render(<Bookingform onSubmit={handleSubmit} />);

  const select = screen.getByLabelText(/Choose Time/);
  fireEvent.change(select, { target: { value: time } });

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  //expect(handleSubmit).toHaveBeenCalledWith({
   // time,
 // });
})