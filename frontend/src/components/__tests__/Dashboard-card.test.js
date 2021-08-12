import React from "react";
import renderer from "react-test-renderer";

import DashboardCard from "../Dashboard-card";

describe("DashboardCard", () => {
  it("renders DashboardCard", () => {
    const tree = renderer
      .create(
        <DashboardCard
          createdAt="2021-08-11T13:38:49.000Z"
          title="This is title"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
