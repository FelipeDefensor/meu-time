import * as React from "react";
import "./App.css";
import axiosInstance from "./axios";

const APIKeyInput = () => {
  return (
    <>
      <label htmlFor="apikey">Insira sua chave para API:</label>
      <input type="text" name="apikey" />
      <input type="submit" value="Entrar" />
    </>
  );
};

function App() {
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

  React.useEffect(getCountries, []);
  return (
    <>
      <h1>API-Football</h1>
      <APIKeyInput />
    </>
  );
}

export default App;
