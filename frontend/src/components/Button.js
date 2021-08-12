import styled from "styled-components";
import PropTypes from "prop-types";
import { FontSize } from "../utils/sizes";
import Colours from "../utils/colours";

const Button = styled.button`
  font-size: ${({ size }) => FontSize[size]};
  background-color: ${Colours.AQUA};
  color: ${Colours.NAVY};
  height: 40px;
`;

Button.propTypes = {
  size: PropTypes.oneOf(["S", "M", "L"]),
};
Button.defaultProps = {
  size: "S",
};

export default Button;
