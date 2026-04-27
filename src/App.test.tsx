import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders portfolio commands", () => {
  render(<App />);
  expect(screen.getByRole("button", { name: /about/i })).toBeInTheDocument();
});

test("renders a section from the shared command registry", async () => {
  const user = userEvent.setup();

  render(<App />);

  await user.click(screen.getByRole("button", { name: /projects/i }));

  expect(
    screen.getByRole("heading", { level: 4, name: /gameboy zero/i }),
  ).toBeInTheDocument();
});
