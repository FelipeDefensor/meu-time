import * as React from "react";
import { describe, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../../src/Login";

describe("Login component", () => {
  const user = userEvent.setup();
  it("renders without crashing", () => {
    render(<Login handleKeySubmit={() => {}} isKeyInvalid={false} />);
  });

  it("displays API-Football title", () => {
    render(<Login handleKeySubmit={() => {}} isKeyInvalid={false} />);
    expect(screen.getByText("API-Football")).toBeInTheDocument();
  });

  it("renders APIKeyInput", () => {
    const { container } = render(<Login handleKeySubmit={() => {}} isKeyInvalid={false} />);
    expect(container.querySelector("input")).toBeInTheDocument();
  });

  it("calls handleKeySubmit on form submission", async () => {
    const mockSubmit = vi.fn();
    render(<Login handleKeySubmit={mockSubmit} isKeyInvalid={false} />);

    await user.click(screen.getByText("Entrar"));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(1);
    });
  });

  it("calls handleKeySubmit with typed value on submission", async () => {
    const mockSubmit = vi.fn();
    const { container } = render(<Login handleKeySubmit={mockSubmit} isKeyInvalid={false} />);

    await user.type(container.querySelector("input")!, "test key");
    await user.click(screen.getByText("Entrar"));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(1);
      expect(mockSubmit).toHaveBeenCalledWith("test key");
    });
  });

  it("displays invalid key error message when isKeyInvalid is true", () => {
    render(<Login handleKeySubmit={() => {}} isKeyInvalid={true} />);
    expect(screen.getByText("Chave inválida.")).toBeInTheDocument();
  });
});
