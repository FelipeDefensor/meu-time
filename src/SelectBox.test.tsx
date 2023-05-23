import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectBox from "./SelectBox";

describe("SelectBox", () => {
  const options = ["a1", "b2", "c3", "d4"];

  it("display label", () => {
    render(<SelectBox options={options} prompt={"test prompt"} handleSubmit={() => {}} />);

    expect(screen.getByText("test prompt")).toBeInTheDocument();
  });

  it("renders with the correct options", () => {
    render(<SelectBox options={options} prompt={"test prompt"} handleSubmit={() => {}} />);

    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it("calls onSubmit with selected option when submitted", async () => {
    const user = userEvent.setup();
    const onSubmitMock = vi.fn();
    render(<SelectBox options={options} prompt="" handleSubmit={onSubmitMock} />);

    await user.selectOptions(screen.getByRole("combobox"), "b2");
    await user.click(screen.getByRole("button"));

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith("b2");
  });

  it("calls");
});
