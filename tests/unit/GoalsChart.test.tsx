import { render, screen } from "@testing-library/react";
import React from "react";
import GoalsChart from "../../src/GoalsChart";

describe("GoalsChart", () => {
  const mockData = {
    "0-15": { total: 10, percentage: 0 },
    "16-30": { total: 15, percentage: 0 },
    "31-45": { total: 20, percentage: 0 },
    "46-60": { total: 25, percentage: 0 },
    "61-75": { total: 30, percentage: 0 },
    "76-90": { total: 35, percentage: 0 },
    "91-105": { total: 40, percentage: 0 },
    "106-120": { total: 45, percentage: 0 },
  }; // percentage is not used, it's just there to make the data structure match the data structure expected by the chart

  it("renders correctly", () => {
    render(<GoalsChart data={mockData} />);

    expect(screen.getByText("Gols/tempo de jogo")).toBeInTheDocument();
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
