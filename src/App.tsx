import * as React from "react";
import "./App.css";
import axiosInstance from "./axios";

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
    </>
  );
}

export default App;
