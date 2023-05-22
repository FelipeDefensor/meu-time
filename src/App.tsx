import * as React from "react";
import "./App.css";
import axiosInstance from "./axios";
import { AxiosError } from "axios";
import APIKeyInput from "./APIKeyInput";
import { Country, League, LeagueDetail } from "./types";
import CountrySelectBox from "./CountrySelectBox";
import LeagueSelectBox from "./LeagueSelectBox";

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

  const getLeaguesFromResponse = (leagueDetails: LeagueDetail[]): League[] => {
    let leagues: League[] = [];
    for (let i in leagueDetails) {
      leagues.push(leagueDetails[i].league);
    }
    return leagues;
  };

  const fetchLeagues = async (country: string) => {
    try {
      const res = await axiosInstance.get("leagues", {
        params: {
          country: country,
        },
      });
      const leagues = getLeaguesFromResponse(res.data.response);
      setLeagues(leagues);
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
      {countries.length ? (
        <CountrySelectBox countries={countries} handleSubmit={fetchLeagues} />
      ) : null}
      {leagues.length ? <LeagueSelectBox leagues={leagues} handleSubmit={() => {}} /> : null}
    </>
  );
};

export default App;
