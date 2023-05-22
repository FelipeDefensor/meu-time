import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { APIKeyInput, CountrySelectBox } from "./App";

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
  it("renders with the correct options", () => {
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

    render(<CountrySelectBox countries={countries} />);

    countries.forEach((country) => {
      expect(screen.getByText(country.name)).toBeInTheDocument();
    });
  });
});
