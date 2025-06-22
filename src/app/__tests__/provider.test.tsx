import { render, screen } from "@/testing/test-utils";

import { AppProvider } from "../provider";

describe("AppProvider", () => {
  it("should render properly", async () => {
    render(<AppProvider>Hello world!</AppProvider>);

    expect(screen.getByText("Hello world!")).toBeInTheDocument();
  });
});
