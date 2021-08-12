import React from "react";
import renderer from "react-test-renderer";

import Label from "../Label";

describe("Label", () => {
  it("renders Label with size 1em if size is not specified", () => {
    const tree = renderer.create(<Label />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule("font-size", "1em");
  });

  it("renders Label with size 1em if size is not valid", () => {
    const tree = renderer.create(<Label />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule("font-size", "1em");
  });

  it("renders specified Label", () => {
    const small = renderer.create(<Label size="S" />).toJSON();
    expect(small).toMatchSnapshot();
    expect(small).toHaveStyleRule("font-size", "1em");

    const medium = renderer.create(<Label size="M" />).toJSON();
    expect(medium).toMatchSnapshot();
    expect(medium).toHaveStyleRule("font-size", "1.5em");

    const large = renderer.create(<Label size="L" />).toJSON();
    expect(large).toMatchSnapshot();
    expect(large).toHaveStyleRule("font-size", "2em");
  });
});
