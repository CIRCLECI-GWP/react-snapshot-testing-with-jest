import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Counter from "./Counter";

describe("Jest Snapshot testing suite", () => {
  it("Matches DOM Snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("Should render 3 after three increments", () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: /increment/i });

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    expect(screen.getByText("3")).toMatchSnapshot();
  });
});
