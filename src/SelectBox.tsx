import * as React from "react";

type SelectBoxProps = {
  options: string[];
  prompt: string;
  handleSubmit: (key: string) => void;
  selectId?: string;
  disabled?: boolean;
};

const SelectBox = ({ options, prompt, handleSubmit, selectId, disabled }: SelectBoxProps) => {
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
    <form onChange={onSubmit} className="mb-3">
      <div className="text-start text-muted">
        <label htmlFor="select" className="form-label">
          {prompt}
        </label>
      </div>
      <div className="d-flex">
        <select
          name="select"
          id={selectId}
          className="form-select me-2"
          disabled={disabled}
          style={{ minWidth: 200 }}
        >
          <option selected disabled>
            ---
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default SelectBox;
