import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CountrySelectBox from "./CountrySelectBox";

describe("SelectBox", () => {
  const countries = [
    {
      name: "Brasil",
      code: "BR",
      flag: "",
    },
    {
      name: "Argentina",
      code: "AR",
      flag: "",
    },
    {
      name: "Uruguai",
      code: "UR",
      flag: "",
    },
  ];

  it("renders with the correct options", () => {
    render(<CountrySelectBox countries={countries} handleSubmit={() => {}} />);

    countries.forEach((country) => {
      expect(screen.getByText(country.name)).toBeInTheDocument();
    });
  });

  it("submits selected option", async () => {
    const handleSubmit = vi.fn();
    const user = userEvent.setup();
    render(<CountrySelectBox countries={countries} handleSubmit={handleSubmit} />);

    await user.selectOptions(screen.getByRole("combobox"), "Uruguai");
    await user.click(screen.getByRole("button"));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith("Uruguai");
  });
});
