import * as React from "react";
import { Player } from "./types";

type PlayerListProps = {
  players: Pick<Player, "name" | "age" | "nationality" | "photo">[];
};

const PlayerList: React.FC<PlayerListProps> = ({ players }) => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
    <div>Name</div>
    <div>Age</div>
    <div>Nationality</div>
    <div>Photo</div>
    {players.map((player) => (
      <>
        <div>{player.name}</div>
        <div>{player.age}</div>
        <div>{player.nationality}</div>
        <div>
          <img src={player.photo} alt={player.name} width="50" height="50" />
        </div>
      </>
    ))}
  </div>
);

export default PlayerList;
