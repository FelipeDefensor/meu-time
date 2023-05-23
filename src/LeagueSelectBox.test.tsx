import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LeagueSelectBox from "./LeagueSelectBox";

describe("SelectBox", () => {
  const leagues = [
    {
      name: "Copa Libertadores",
      type: "Cup",
      logo: "",
    },
    {
      name: "Serie A",
      type: "Cup",
      logo: "",
    },
    {
      name: "Serie B",
      type: "Cup",
      logo: "",
    },
  ];

  it("renders with the correct options", () => {
    render(<LeagueSelectBox leagues={leagues} handleSubmit={() => {}} />);

    leagues.forEach((league) => {
      expect(screen.getByText(league.name)).toBeInTheDocument();
    });
  });

  it("calls onSubmit with selected league when submitted", async () => {
    const user = userEvent.setup();
    const onSubmitMock = vi.fn();
    render(<LeagueSelectBox leagues={leagues} handleSubmit={onSubmitMock} />);

    await user.selectOptions(screen.getByRole("combobox"), "Serie B");
    await user.click(screen.getByRole("button"));

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith("Serie B");
  });

  it("calls");
});
