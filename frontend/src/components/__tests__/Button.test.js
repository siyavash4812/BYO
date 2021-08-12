import React from "react";
import renderer from "react-test-renderer";

import Button from "../Button";

describe("Button", () => {
  it("renders Button with size 1em if size is not specified", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule("font-size", "1em");
  });
});
