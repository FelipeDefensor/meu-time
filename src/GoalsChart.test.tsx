import { render, screen } from "@testing-library/react";
import GoalsChart from "./GoalsChart";

describe("GoalsChart", () => {
  const mockData = {
    "0-15": { total: 10 },
    "16-30": { total: 15 },
    "31-45": { total: 20 },
    "46-60": { total: 25 },
    "61-75": { total: 30 },
    "76-90": { total: 35 },
    "91-105": { total: 40 },
    "106-120": { total: 45 },
  };
  it("renders correctly", () => {
    render(<GoalsChart data={mockData} />);

    expect(screen.getByText(/Goals by Match Time/i)).toBeInTheDocument();
  });

  it("displays the correct data", () => {
    render(<GoalsChart data={mockData} />);

    expect(screen.getByText("0-15")).toBeInTheDocument();
    expect(screen.getByText("16-30")).toBeInTheDocument();
    expect(screen.getByText("31-45")).toBeInTheDocument();
    expect(screen.getByText("46-60")).toBeInTheDocument();
    expect(screen.getByText("76-90")).toBeInTheDocument();
    expect(screen.getByText("91-105")).toBeInTheDocument();
    expect(screen.getByText("106-120")).toBeInTheDocument();
  });
});
