import { render, screen, within } from "@testing-library/react";
import WinLossTable from "./WinLossTable";

describe("WinLossTable", () => {
  const mockFixtures = {
    played: { home: 1, away: 2, total: 3 },
    wins: { home: 4, away: 5, total: 6 },
    draws: { home: 7, away: 8, total: 9 },
    loses: { home: 10, away: 11, total: 12 },
  };

  it("displays statistics for all fixtures", () => {
    render(<WinLossTable fixtures={mockFixtures} />);

    // Played stats
    expect(screen.getByText("Played")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();

    // Wins stats
    expect(screen.getByText("Wins")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();

    // Draws stats
    expect(screen.getByText("Draws")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();

    // Losses stats
    expect(screen.getByText("Losses")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("11")).toBeInTheDocument();
    expect(screen.getByText("12")).toBeInTheDocument();
  });

  it("displays statistics with correct layout", () => {
    const { container } = render(<WinLossTable fixtures={mockFixtures} />);

    const rows = container.querySelectorAll("tr");
    expect(rows).toHaveLength(5); // 4 data rows + 1 header row

    const checkRow = (
      row: HTMLElement,
      category: string,
      home: number,
      away: number,
      total: number
    ) => {
      const withinRow = within(row);
      expect(withinRow.getByText(category)).toBeInTheDocument();
      expect(withinRow.getByText(home.toString())).toBeInTheDocument();
      expect(withinRow.getByText(away.toString())).toBeInTheDocument();
      expect(withinRow.getByText(total.toString())).toBeInTheDocument();
    };

    checkRow(rows[1], "Played", 1, 2, 3);
    checkRow(rows[2], "Wins", 4, 5, 6);
    checkRow(rows[3], "Draws", 7, 8, 9);
    checkRow(rows[4], "Losses", 10, 11, 12);
  });
});
