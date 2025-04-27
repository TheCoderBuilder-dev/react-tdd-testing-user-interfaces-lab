import { render, screen } from "@testing-library/react";
import App from "../App";
import '@testing-library/jest-dom';


test("displays a top-level heading with the text `Hi, I'm`", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent(/hi, i'm/i);
});
