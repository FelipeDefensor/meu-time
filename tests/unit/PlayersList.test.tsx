import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import PlayersList from "../../src/PlayersList";

describe("PlayersList", () => {
  it("should render", () => {
    render(
      <PlayersList
        players={players}
        getFlagUrl={() => {
          return "";
        }}
      />
    );
    expect(screen.getByText("Nome")).toBeInTheDocument();
    expect(screen.getByText("Idade")).toBeInTheDocument();
    expect(screen.getByText("Nacionalidade")).toBeInTheDocument();
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
    render(
      <PlayersList
        players={players}
        getFlagUrl={() => {
          return "";
        }}
      />
    );

    expect(screen.getByText("Player 1")).toBeInTheDocument();
    expect(screen.getByText("Player 2")).toBeInTheDocument();
    expect(screen.getByText("Player 3")).toBeInTheDocument();

    expect(screen.getByText("20")).toBeInTheDocument();
    expect(screen.getByText("21")).toBeInTheDocument();
    expect(screen.getByText("22")).toBeInTheDocument();
  });
});
