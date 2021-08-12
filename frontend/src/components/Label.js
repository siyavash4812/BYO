import styled from "styled-components";
import PropTypes from "prop-types";
import { FontSize } from "../utils/sizes";
import Colours from "../utils/colours";

const Label = styled.span`
  font-size: ${({ size }) => FontSize[size]};
  color: ${Colours.NAVY}; ;
`;

Label.propTypes = {
  size: PropTypes.oneOf(["S", "M", "L"]),
};
Label.defaultProps = {
  size: "S",
};

export default Label;
