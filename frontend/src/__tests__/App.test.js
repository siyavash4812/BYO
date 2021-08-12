import { render, fireEvent, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "../App";
import { DashboardData } from "../testing-tools/dashboard-data";

const server = setupServer(
  rest.get("/dashboards", (req, res, ctx) => {
    return res(ctx.json(DashboardData));
  })
);
describe("App", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("loads and displays dashboards", async () => {
    const { getByTestId, findAllByTestId } = render(<App />);
    await waitFor(() => getByTestId("dashboard-list"));
    const totalDashboards = await findAllByTestId("dashboard-card");
    expect(totalDashboards).toHaveLength(10);
  });
});
