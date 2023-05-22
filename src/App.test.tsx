import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CountrySelectBox from "./CountrySelectBox";
import APIKeyInput from "./APIKeyInput";

describe("APIKeyInput", () => {
  it("renders input and submit button", () => {
    render(<APIKeyInput handleSubmit={() => {}} />);

    const apiInput = screen.getByRole("textbox");
    const apiSubmit = screen.getByRole("button");

    expect(apiInput).toBeInTheDocument();
    expect(apiSubmit).toBeInTheDocument();
  });

  it("calls onSubmit with the api key when submitted", async () => {
    const user = userEvent.setup();
    const onSubmitMock = vi.fn();
    render(<APIKeyInput handleSubmit={onSubmitMock} />);

    expect(onSubmitMock).not.toHaveBeenCalled();

    const apiInput = screen.getByRole("textbox");
    const apiSubmit = screen.getByRole("button");

    await user.type(apiInput, "test key");
    await user.click(apiSubmit);

    await waitFor(() => {
      expect(apiInput).toHaveValue("test key");
      expect(onSubmitMock).toHaveBeenCalledTimes(1);
    });
  });
});

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
