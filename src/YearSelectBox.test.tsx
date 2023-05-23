import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import YearSelectBox from "./YearSelectBox";

describe("SelectBox", () => {
  const years = [2000, 2001, 2002, 2003, 2004];

  it("renders with the correct options", () => {
    render(<YearSelectBox years={years} handleSubmit={() => {}} />);

    years.forEach((year) => {
      expect(screen.getByText(year)).toBeInTheDocument();
    });
  });
});
