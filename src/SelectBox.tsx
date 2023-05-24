import * as React from "react";

type SelectBoxProps = {
  options: string[];
  prompt: string;
  handleSubmit: (key: string) => void;
  selectId?: string;
  disabled: boolean;
  isLoading: boolean; // New prop for loading state
};

const SelectBox = ({
  options,
  prompt,
  handleSubmit,
  selectId,
  disabled,
  isLoading,
}: SelectBoxProps) => {
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
      <div className="text-start text-muted ">
        <label htmlFor="select" className="form-label">
          {prompt}
        </label>
      </div>
      <div className="d-flex">
        <select
          name="select"
          id={selectId}
          className="form-select me-2"
          style={{ minWidth: "200px" }}
          disabled={disabled}
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
        {isLoading && <div className="spinner"></div>}
      </div>
    </form>
  );
};

export default SelectBox;
