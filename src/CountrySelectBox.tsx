import * as React from "react";
import { Country } from "./types";

type CountrySelectBoxProps = {
  countries: Country[];
  handleSubmit: (key: string) => void;
};

const CountrySelectBox = ({ countries, handleSubmit }: CountrySelectBoxProps) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const select = event.currentTarget.elements.namedItem("country") as HTMLSelectElement;
    if (!select) {
      throw new Error("country select box not found");
    }
    const value = select.value;
    handleSubmit(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="countrySelect">Selecione o país:</label>
      <select id="countrySelect" name="country">
        {countries.map((country) => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      <input type="submit" value="Escolher" />
    </form>
  );
};

export default CountrySelectBox;
