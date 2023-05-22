import * as React from "react";
import "./App.css";
import axiosInstance from "./axios";
import { AxiosError } from "axios";

type Country = {
  name: string;
  code: string;
  flag: string;
};

type APIKeyInputProps = {
  handleSubmit: (key: string) => void;
};

const APIKeyInput = ({ handleSubmit }: APIKeyInputProps) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = form.elements.namedItem("apiKey") as HTMLInputElement;
    if (!input) {
      throw new Error("apiKey input not found");
    }
    const value = input.value;
    handleSubmit(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="apiKey">Insira sua chave para a API:</label>
      <input type="text" name="apiKey" />
      <input type="submit" value="Entrar" />
    </form>
  );
};

const App = () => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const fetchCountries = async () => {
    try {
      const res = await axiosInstance.get("countries");
      setCountries(res.data.response);
    } catch (_err) {
      const err = _err as AxiosError;
      if (err.response?.status == 403) {
        console.log("Chave da API inválida.");
      } else if (err.response?.status == 499) {
        console.log("Tempo para a requisição esgotado.");
      } else if (err.response?.status == 500) {
        console.log("Erro no servidor.");
      }
      console.log(err);
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
    </>
  );
};

export default App;
export { APIKeyInput };
