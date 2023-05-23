import * as React from "react";

type YearSelectBoxProps = {
  years: number[];
  handleSubmit: (key: string) => void;
};

const YearSelectBox = ({ years, handleSubmit }: YearSelectBoxProps) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const select = event.currentTarget.elements.namedItem("year") as HTMLSelectElement;
    if (!select) {
      throw new Error("Year select box not found");
    }
    const value = select.value;
    handleSubmit(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="yearSelect">Selecione o país:</label>
      <select id="yearSelect" name="year">
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <input type="submit" value="Escolher" />
    </form>
  );
};

export default YearSelectBox;
