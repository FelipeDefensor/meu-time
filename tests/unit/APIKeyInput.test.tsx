import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import APIKeyInput from "../../src/APIKeyInput";

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
