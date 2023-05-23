import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import PlayerList from "./PlayersList";

describe("PlayerList", () => {
  it("should render", () => {
    render(<PlayerList players={[]} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
    expect(screen.getByText("Nationality")).toBeInTheDocument();
    expect(screen.getByText("Photo")).toBeInTheDocument();
  });

  const players = [
    {
      name: "Player 1",
      age: 20,
      nationality: "Argentina",
      photo: "",
    },
    {
      name: "Player 2",
      age: 21,
      nationality: "Brazil",
      photo: "",
    },
    {
      name: "Player 3",
      age: 22,
      nationality: "Chile",
      photo: "",
    },
  ];

  it("should render a list of players", () => {
    render(<PlayerList players={players} />);

    expect(screen.getByText("Player 1")).toBeInTheDocument();
    expect(screen.getByText("Player 2")).toBeInTheDocument();
    expect(screen.getByText("Player 3")).toBeInTheDocument();

    expect(screen.getByText("20")).toBeInTheDocument();
    expect(screen.getByText("21")).toBeInTheDocument();
    expect(screen.getByText("22")).toBeInTheDocument();

    expect(screen.getByText("Argentina")).toBeInTheDocument();
    expect(screen.getByText("Brazil")).toBeInTheDocument();
    expect(screen.getByText("Chile")).toBeInTheDocument();
  });
});
