import * as React from "react";

type SelectBoxProps = {
  options: string[];
  prompt: string;
  handleSubmit: (key: string) => void;
};

const SelectBox = ({ options, prompt, handleSubmit }: SelectBoxProps) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const select = event.currentTarget.elements.namedItem("select") as HTMLSelectElement;
    if (!select) {
      throw new Error("Select box not found");
    }
    const value = select.value;
    handleSubmit(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="select">{prompt}</label>
      <select name="select">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input type="submit" value="Escolher" />
    </form>
  );
};

export default SelectBox;
