import * as React from "react";
import "./App.css";
import axiosInstance from "./axios";

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
      <label htmlFor="apiKey">Insira sua chave para API:</label>
      <input type="text" name="apiKey" />
      <input type="submit" value="Entrar" />
    </form>
  );
};

const App() {
  const [apiKey, setApiKey] = React.useState("");

  const getCountries = () => {
    const _getCountries = async () => {
      try {
        const response = await axiosInstance.get("countries");
        console.log(response);
      } catch (err) {
        if (err.response.status == 403) {
          console.log("Chave da API inválida.");
        }
        console.log(err);
      }
    };
    _getCountries();
  };

  const onApiKeySubmit = (key: string) => {
    console.log(key);
    setApiKey(key);
  };

  React.useEffect(getCountries, []);
  return (
    <>
      <h1>API-Football</h1>
      <APIKeyInput handleSubmit={onApiKeySubmit} />
    </>
  );
}

export default App;
