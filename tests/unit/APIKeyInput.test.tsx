import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import APIKeyInput from "../../src/APIKeyInput";

describe("APIKeyInput", () => {
  it("renders input and submit button", () => {
    const { container } = render(<APIKeyInput handleSubmit={() => {}} isKeyInvalid={false} />);

    expect(container.querySelector("input")).toBeInTheDocument();
    expect(screen.getByText("Entrar")).toBeInTheDocument();
  });

  it("calls onSubmit with the api key when submitted", async () => {
    const user = userEvent.setup();
    const onSubmitMock = vi.fn();
    const { container } = render(<APIKeyInput handleSubmit={onSubmitMock} isKeyInvalid={false} />);

    expect(onSubmitMock).not.toHaveBeenCalled();

    const apiInput = container.querySelector("input");

    await user.type(apiInput!, "test key");
    await user.click(screen.getByText("Entrar"));

    await waitFor(() => {
      expect(apiInput).toHaveValue("test key");
      expect(onSubmitMock).toHaveBeenCalledTimes(1);
    });
  });
});
