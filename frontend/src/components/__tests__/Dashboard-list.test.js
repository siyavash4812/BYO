import React from "react";
import renderer from "react-test-renderer";
import { DashboardData } from "../../testing-tools/dashboard-data";
import DashboardList from "../Dashboard-list";

describe("DashboardList", () => {
  it("renders DashboardList", () => {
    const tree = renderer
      .create(<DashboardList data={DashboardData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
