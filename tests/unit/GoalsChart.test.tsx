import { render, screen } from "@testing-library/react";
import React from "react";
import GoalsChart from "../../src/GoalsChart";

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe("GoalsChart", () => {
  window.ResizeObserver = ResizeObserver;

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
    render(
      <div style={{ width: 500 }}>
        <GoalsChart data={mockData} />
      </div>
    );

    expect(screen.getByText("Gols/tempo de jogo")).toBeInTheDocument();
  });
});
