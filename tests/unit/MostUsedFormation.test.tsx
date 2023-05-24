import { render, screen } from "@testing-library/react";
import React from "react";
import MostUsedFormation from "../../src/MostUsedFormation";

describe("MostUsedFormation component", () => {
  it("renders correctly", () => {
    const mockFormation = {
      formation: "4-4-2",
      played: 10,
    };

    render(<MostUsedFormation formation={mockFormation} />);

    expect(screen.getByText(/Formação mais comum/i)).toBeInTheDocument();
    expect(screen.getByText(/4-4-2 \(10 vezes\)/i)).toBeInTheDocument();
  });
});
