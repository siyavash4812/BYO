import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Flex = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-wrap: wrap;
  padding: 20px;
  flex-direction: ${({ direction }) => direction};
`;

const Container = ({ children, ...props }) => {
  return <Flex {...props}>{children}</Flex>;
};

Container.propTypes = {
  justifyContent: PropTypes.oneOf([
    "center",
    "flex-end",
    "flex-start",
    "space-around",
    "space-between",
  ]),
  direction: PropTypes.oneOf([
    "row",
    "column",
    "row-reverse",
    "column-reverse",
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
Container.defaultProps = {
  justifyContent: "center",
  direction: "column",
};
export default Container;
