import * as React from "react";

type SelectBoxProps = {
  options: string[];
  prompt: string;
  handleSubmit: (key: string) => void;
  selectId?: string;
};

const SelectBox = ({ options, prompt, handleSubmit, selectId }: SelectBoxProps) => {
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
    <form onSubmit={onSubmit} className="mb-3">
      <div className="text-start text-muted ">
        <label htmlFor="select" className="form-label">
          {prompt}
        </label>
      </div>
      <div className="d-flex">
        <select name="select" id={selectId} className="form-select me-2">
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button type="submit" className="btn btn-primary">
          Escolher
        </button>
      </div>
    </form>
  );
};

export default SelectBox;
