import renderer from "react-test-renderer";
import Container from "../Container";

it("renders flex container", () => {
  const tree = renderer
    .create(
      <Container>
        <h1>Hello</h1>
      </Container>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("display", "flex");
});
