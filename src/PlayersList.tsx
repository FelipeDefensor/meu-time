import * as React from "react";
import { Player } from "./types";

type PlayerListProps = {
  players: Pick<Player, "name" | "age" | "nationality" | "photo">[];
  getFlagUrl: (country: string) => string;
};

const PlayerList: React.FC<PlayerListProps> = ({ players, getFlagUrl }) => (
  <div>
    <h4>Jogadores</h4>
    <table className="table table-hover align-middle">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Idade</th>
          <th scope="col">Nacionalidade</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={index} className="align-items-center">
            <td>{player.name}</td>
            <td>{player.age}</td>
            <td>
              <img
                src={getFlagUrl(player.nationality)}
                alt={player.name}
                style={{ width: "30px", height: "30px" }}
              />
            </td>
            <td>
              <img src={player.photo} alt={player.name} style={{ width: "50px", height: "50px" }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PlayerList;
