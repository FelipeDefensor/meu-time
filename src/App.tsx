import * as React from "react";
import "./App.css";
import axiosInstance from "./axios";

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
    handleSubmit(event.currentTarget.elements.apiKey.value);
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
      const response = await axiosInstance.get("countries");
      setCountries(response);
    } catch (err) {
      if (err.response.status == 403) {
        console.log("Chave da API inválida.");
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
