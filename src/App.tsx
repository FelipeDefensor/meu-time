import * as React from "react";
import "./App.css";
import axiosInstance from "./axios";
import { AxiosError } from "axios";
import APIKeyInput from "./APIKeyInput";
import { Country, League, LeagueDetail } from "./types";
import CountrySelectBox from "./CountrySelectBox";
import LeagueSelectBox from "./LeagueSelectBox";
import YearSelectBox from "./YearSelectBox";

const handleAPIError = (error: AxiosError) => {
  if (error.response?.status == 499) {
    console.log("Tempo para a requisição esgotado.");
  } else if (error.response?.status == 500) {
    console.log("Erro no servidor.");
  }
  console.log(error);
};

const App = () => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [leagues, setLeagues] = React.useState<League[]>([]);
  const [leagueToSeasonYears, setLeagueToSeasonYears] = React.useState<Record<string, number[]>>(
    {}
  );
  const [seasonYears, setSeasonYears] = React.useState<number[]>([]);

  const fetchCountries = async () => {
    try {
      const res = await axiosInstance.get("countries");
      setCountries(res.data.response);
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

  const getLeagueToSeasonYears = (leagueDetails: LeagueDetail[]): Record<string, number[]> => {
    let leagueToSeasonYears: Record<string, number[]> = {};
    for (let i in leagueDetails) {
      let leagueName = leagueDetails[i].league.name;
      let seasonYears = leagueDetails[i].seasons.map((l) => l.year);
      leagueToSeasonYears[leagueName] = seasonYears;
    }
    console.log(leagueToSeasonYears);
    return leagueToSeasonYears;
  };

  const fetchLeagues = async (country: string) => {
    try {
      const res = await axiosInstance.get("leagues", {
        params: {
          country: country,
        },
      });
      setLeagues(getLeagues(res.data.response));
      setLeagueToSeasonYears(getLeagueToSeasonYears(res.data.response));
    } catch (err) {
      handleAPIError(err as AxiosError);
    }
  };

  const displaySeasonYears = (league: string) => {
    setSeasonYears(leagueToSeasonYears[league]);
  };

  const onApiKeySubmit = (key: string) => {
    axiosInstance.defaults.headers["X-RapidAPI-Key"] = key;
    fetchCountries();
  };

  return (
    <>
      <h1>API-Football</h1>
      <APIKeyInput handleSubmit={onApiKeySubmit} />
      {countries.length ? (
        <CountrySelectBox countries={countries} handleSubmit={fetchLeagues} />
      ) : null}
      {leagues.length ? (
        <LeagueSelectBox leagues={leagues} handleSubmit={displaySeasonYears} />
      ) : null}
      {seasonYears.length ? <YearSelectBox years={seasonYears} handleSubmit={() => {}} /> : null}
    </>
  );
};

export default App;
