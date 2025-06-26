import { render, screen } from "~/testing/testUtils";

import { ProductsTable } from "./ProductsTable";

describe("ProductsTable", () => {
  it("test", async () => {
    const data = {
      products: [],
      pagination: {
        page: 1,
        pageSize: 10,
        totalPages: 1,
      },
    };
    const handlePaginationChange = vi.fn();

    render(<ProductsTable data={data} onPaginationChange={handlePaginationChange} />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Id")).toBeInTheDocument();
  });
});
