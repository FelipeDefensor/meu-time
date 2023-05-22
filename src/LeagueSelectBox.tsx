import * as React from "react";
import { League } from "./types";

type LeagueSelectBoxProps = {
  leagues: League[];
  handleSubmit: (key: string) => void;
};

const LeagueSelectBox = ({ leagues, handleSubmit }: LeagueSelectBoxProps) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const select = event.currentTarget.elements.namedItem("league") as HTMLSelectElement;
    if (!select) {
      throw new Error("League select box not found");
    }
    const value = select.value;
    handleSubmit(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="leagueSelect">Selecione a liga:</label>
      <select id="leagueSelect" name="league">
        {leagues.map((league) => (
          <option key={league.name} value={league.name}>
            {league.name}
          </option>
        ))}
      </select>
      <input type="submit" value="Escolher" />
    </form>
  );
};

export default LeagueSelectBox;
