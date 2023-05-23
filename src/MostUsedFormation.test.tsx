import { render, screen } from "@testing-library/react";
import MostUsedFormation from "./MostUsedFormation";

describe("MostUsedFormation component", () => {
  it("renders correctly", () => {
    const mockFormation = {
      formation: "4-4-2",
      played: 10,
    };

    render(<MostUsedFormation formation={mockFormation} />);

    expect(screen.getByText(/Preferred formation:/i)).toBeInTheDocument();
    expect(screen.getByText(/4-4-2 \(10 times\)/i)).toBeInTheDocument();
  });
});
