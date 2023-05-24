import * as React from "react";
import "./App.css";
import axiosInstance from "./axios";
import { AxiosError } from "axios";
import APIKeyInput from "./APIKeyInput";
import {
  Country,
  Fixtures,
  Formation,
  GoalsFor,
  League,
  LeagueDetail,
  Player,
  TeamDetail,
} from "./types";
import SelectBox from "./SelectBox";
import PlayerList from "./PlayersList";
import WinLossTable from "./WinLossTable";
import GoalsChart from "./GoalsChart";
import MostUsedFormation from "./MostUsedFormation";
import TeamLogo from "./TeamLogo";

const handleAPIError = (error: AxiosError) => {
  if (error.response?.status == 499) {
    console.log("Tempo para a requisição esgotado.");
  } else if (error.response?.status == 500) {
    console.log("Erro no servidor.");
  }
  console.log(error);
};

const App = () => {
  const [isLoadingCountries, setIsLoadingCountries] = React.useState<boolean>(false);
  const [isLoadingLeagues, setIsLoadingLeagues] = React.useState<boolean>(false);
  const [isLoadingTeams, setIsLoadingTeams] = React.useState<boolean>(false);
  const [countryNames, setCountryNames] = React.useState<string[]>([]);
  const [countryToFlag, setCountryToFlag] = React.useState<Record<string, string>>({});
  const [leagueNames, setLeagueNames] = React.useState<string[]>([]);
  const [leagueToYears, setLeagueToYears] = React.useState<Record<string, string[]>>({});
  const [leagueToId, setLeagueToId] = React.useState<Record<string, number>>({});
  const [seasonYears, setSeasonYears] = React.useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = React.useState<string>("");
  const [selectedLeague, setSelectedLeague] = React.useState<number>(0);
  const [selectedYear, setSelectedYear] = React.useState<number>(0);
  const [selectedTeam, setSelectedTeam] = React.useState<number>(0);
  const [teamNames, setTeamNames] = React.useState<string[]>([]);
  const [teamNameToId, setTeamNameToId] = React.useState<Record<string, number>>({});
  const [players, setPlayers] = React.useState<Player[]>([]);
  const [mostUsedFormation, setMostUsedFormation] = React.useState<Formation | null>(null);
  const [fixtures, setFixtures] = React.useState<Fixtures | null>(null);
  const [goalsFor, setGoalsFor] = React.useState<GoalsFor | null>(null);

  const fetchCountries = async () => {
    try {
      setIsLoadingCountries(true);
      const res = await axiosInstance.get("countries");
      setCountryNames(res.data.response.map((c: Country) => c.name));
      setCountryToFlag(getCountryToFlag(res.data.response));
      setIsLoadingCountries(false);
    } catch (_err) {
      const err = _err as AxiosError;
      if (err.response?.status == 403) {
        console.log("Chave da API inválida.");
      } else handleAPIError(err);
    }
  };

  const getLeagues = (leagueDetails: LeagueDetail[]): League[] => {
    let leagues: League[] = [];
    for (let i in leagueDetails) {
      leagues.push(leagueDetails[i].league);
    }
    return leagues;
  };

  const getLeagueToSeasonYears = (leagueDetails: LeagueDetail[]): Record<string, string[]> => {
    let leagueToSeasonYears: Record<string, string[]> = {};
    for (let i in leagueDetails) {
      let leagueName = leagueDetails[i].league.name;
      let seasonYears = leagueDetails[i].seasons.map((l) => l.year.toString());
      leagueToSeasonYears[leagueName] = seasonYears;
    }
    return leagueToSeasonYears;
  };

  const getCountryToFlag = (countries: Country[]) => {
    let countryToFlag: Record<string, string> = {};
    for (let i in countries) {
      let name = countries[i].name;
      let code = countries[i].flag;
      countryToFlag[name] = code;
    }
    return countryToFlag;
  };

  const getLeagueToId = (leagueDetails: LeagueDetail[]): Record<string, number> => {
    let leagueToId: Record<string, number> = {};
    for (let i in leagueDetails) {
      let leagueName = leagueDetails[i].league.name;
      let leagueId = leagueDetails[i].league.id;
      leagueToId[leagueName] = leagueId;
    }
    return leagueToId;
  };

  const getTeamNameToId = (teamDetails: TeamDetail[]): Record<string, number> => {
    let teamToId: Record<string, number> = {};
    for (let i in teamDetails) {
      let teamName = teamDetails[i].team.name;
      let teamId = teamDetails[i].team.id;
      teamToId[teamName] = teamId;
    }
    return teamToId;
  };

  const handleCountrySubmit = async (country: string) => {
    try {
      setIsLoadingLeagues(true);
      const res = await axiosInstance.get("leagues", {
        params: {
          country: country,
        },
      });
      const leagues = getLeagues(res.data.response);
      setSelectedCountry(country);
      setLeagueNames(leagues.map((l: League) => l.name));
      setLeagueToYears(getLeagueToSeasonYears(res.data.response));
      setLeagueToId(getLeagueToId(res.data.response));
      setIsLoadingLeagues(false);
    } catch (err) {
      handleAPIError(err as AxiosError);
    }
  };

  const handleLeagueSubmit = (league: string) => {
    setSelectedLeague(leagueToId[league]);
    setSeasonYears(leagueToYears[league]);
  };

  const handleSeasonSubmit = async (year: string) => {
    try {
      setIsLoadingTeams(true);
      const res = await axiosInstance.get("teams", {
        params: {
          country: selectedCountry,
          league: selectedLeague,
          season: year,
        },
      });
      setSelectedYear(parseInt(year));
      setTeamNames(res.data.response.map((x: TeamDetail) => x.team.name));
      setTeamNameToId(getTeamNameToId(res.data.response));
      setIsLoadingTeams(false);
    } catch (err) {
      handleAPIError(err as AxiosError);
    }
  };

  const handleTeamSubmit = async (team: string) => {
    try {
      const res = await axiosInstance.get("players", {
        params: {
          team: teamNameToId[team],
          league: selectedLeague,
          season: selectedYear,
        },
      });
      setSelectedTeam(res.data.parameters.team);
      setPlayers(res.data.response.map((x: { player: Player; statistics: object }) => x.player));
    } catch (err) {
      handleAPIError(err as AxiosError);
    }

    try {
      const res = await axiosInstance.get("teams/statistics", {
        params: {
          team: teamNameToId[team],
          league: selectedLeague,
          season: selectedYear,
        },
      });
      setMostUsedFormation(res.data.response.lineups[0]);
      setFixtures(res.data.response.fixtures);
      setGoalsFor(res.data.response.goals.for);
    } catch (err) {
      handleAPIError(err as AxiosError);
    }
  };

  const handleApiKeySubmit = (key: string) => {
    axiosInstance.defaults.headers["X-RapidAPI-Key"] = key;
    fetchCountries();
  };

  const getTeamLogoUrl = () => {
    return `https://media.api-sports.io/football/teams/${selectedTeam}.png`;
  };

  return (
    <>
      <h1>API-Football</h1>
      <APIKeyInput handleSubmit={handleApiKeySubmit} />
      <div
        style={{
          maxWidth: 800,
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <SelectBox
          options={countryNames}
          prompt={"País"}
          handleSubmit={handleCountrySubmit}
          selectId="countrySelect"
          disabled={!countryNames.length}
          isLoading={isLoadingCountries}
        />
        <SelectBox
          options={leagueNames}
          prompt={"Liga"}
          handleSubmit={handleLeagueSubmit}
          selectId="leagueSelect"
          disabled={!leagueNames.length}
          isLoading={isLoadingLeagues}
        />
        <SelectBox
          options={seasonYears}
          prompt="Temporada"
          handleSubmit={handleSeasonSubmit}
          selectId="seasonSelect"
          disabled={!seasonYears.length}
          isLoading={false}
        />
        <SelectBox
          options={teamNames}
          prompt="Time"
          handleSubmit={handleTeamSubmit}
          selectId="teamSelect"
          disabled={!teamNames.length}
          isLoading={isLoadingTeams}
        />
      </div>
      <div style={{ display: "flex", gap: "30px", justifyContent: "center" }}>
        <span>
          {players.length ? (
            <PlayerList players={players} getFlagUrl={(c: string) => countryToFlag[c]} />
          ) : null}
        </span>
        <span>
          {selectedTeam ? <TeamLogo logoUrl={getTeamLogoUrl()} /> : null}
          {fixtures ? <WinLossTable fixtures={fixtures} /> : null}
          {goalsFor ? <GoalsChart data={goalsFor.minute} /> : null}
          {mostUsedFormation ? <MostUsedFormation formation={mostUsedFormation} /> : null}
        </span>
      </div>
    </>
  );
};

export default App;
