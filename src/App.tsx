import * as React from "react";
import "./App.css";
import axiosInstance from "./axios";
import { AxiosError } from "axios";
import APIKeyInput from "./APIKeyInput";
import { Country, League, LeagueDetail, Team, TeamDetail } from "./types";
import SelectBox from "./SelectBox";

const handleAPIError = (error: AxiosError) => {
  if (error.response?.status == 499) {
    console.log("Tempo para a requisição esgotado.");
  } else if (error.response?.status == 500) {
    console.log("Erro no servidor.");
  }
  console.log(error);
};

const App = () => {
  const [countryNames, setCountryNames] = React.useState<string[]>([]);
  const [leagueNames, setLeagueNames] = React.useState<string[]>([]);

  const [leagueToSeasonYears, setLeagueToSeasonYears] = React.useState<Record<string, string[]>>(
    {}
  );
  const [leagueToId, setLeagueToId] = React.useState<Record<string, number>>({});
  const [seasonYears, setSeasonYears] = React.useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = React.useState<string>("");
  const [selectedLeague, setSelectedLeague] = React.useState<number>(0);
  const [selectedYear, setSelectedYear] = React.useState<number>(0);
  const [teamNames, setTeamNames] = React.useState<string[]>([]);

  const fetchCountries = async () => {
    try {
      const res = await axiosInstance.get("countries");
      setCountryNames(res.data.response.map((c: Country) => c.name));
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
    console.log(leagueToSeasonYears);
    return leagueToSeasonYears;
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

  const selectCountry = async (country: string) => {
    try {
      const res = await axiosInstance.get("leagues", {
        params: {
          country: country,
        },
      });
      const leagues = getLeagues(res.data.response);
      setSelectedCountry(country);
      setLeagueNames(leagues.map((l: League) => l.name));
      setLeagueToSeasonYears(getLeagueToSeasonYears(res.data.response));
      setLeagueToId(getLeagueToId(res.data.response));
    } catch (err) {
      handleAPIError(err as AxiosError);
    }
  };

  const selectLeague = (league: string) => {
    setSelectedLeague(leagueToId[league]);
    setSeasonYears(leagueToSeasonYears[league]);
  };

  const selectYear = async (year: string) => {
    try {
      const res = await axiosInstance.get("teams", {
        params: {
          country: selectedCountry,
          league: selectedLeague,
          season: year,
        },
      });
      setSelectedYear(parseInt(year));
      debugger;
      setTeamNames(res.data.response.map((x: TeamDetail) => x.team.name));
    } catch (err) {
      handleAPIError(err as AxiosError);
    }
  };

  const onApiKeySubmit = (key: string) => {
    axiosInstance.defaults.headers["X-RapidAPI-Key"] = key;
    fetchCountries();
  };

  return (
    <>
      <h1>API-Football</h1>
      <APIKeyInput handleSubmit={onApiKeySubmit} />
      {countryNames.length ? (
        <SelectBox
          options={countryNames}
          prompt={"Selecione o país:"}
          handleSubmit={selectCountry}
        />
      ) : null}
      {leagueNames.length ? (
        <SelectBox options={leagueNames} prompt={"Selecione a liga:"} handleSubmit={selectLeague} />
      ) : null}
      {seasonYears.length ? (
        <SelectBox options={seasonYears} prompt="Selecione o ano:" handleSubmit={selectYear} />
      ) : null}
      {teamNames.length ? (
        <SelectBox options={teamNames} prompt="Selecione o time:" handleSubmit={() => {}} />
      ) : null}
    </>
  );
};

export default App;
