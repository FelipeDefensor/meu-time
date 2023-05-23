import * as React from "react";
import { Player } from "./types";

type PlayerListProps = {
  players: Pick<Player, "name" | "age" | "nationality" | "photo">[];
};

const PlayerList: React.FC<PlayerListProps> = ({ players }) => (
  <table className="table table-hover align-middle">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Nationality</th>
        <th scope="col">Photo</th>
      </tr>
    </thead>
    <tbody>
      {players.map((player, index) => (
        <tr key={index} className="align-items-center">
          <td>{player.name}</td>
          <td>{player.age}</td>
          <td>{player.nationality}</td>
          <td>
            <img
              src={player.photo}
              alt={player.name}
              className="img-thumbnail"
              style={{ width: "50px", height: "50px" }}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default PlayerList;
