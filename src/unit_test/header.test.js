import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header";

describe("Header", () => {
  it("render", () => {
    render(
      <MemoryRouter>
       <Header />
      </MemoryRouter>
    );
    expect(screen.getByRole("bars"));
    const Icon = screen.getByRole("bars");
    fireEvent.click(Icon);
    expect(screen.getByRole("cross"));
    const RxCross2 = screen.getByRole('rxcross')
    fireEvent.click(RxCross2);
    expect(screen.getByRole("bars"));
  });
});
