import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { parseISO, format } from "date-fns";

import Label from "./Label";
import colours from "../utils/colours";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px dotted peru;
  margin: 10px 0px;
  background-color: ${colours.SILVER};
`;

const DashboardCard = ({ createdAt, title }) => {
  return (
    <Wrapper data-testid="dashboard-card">
      <Label size="S">Title: {title}</Label>
      <Label size="S">
        Created: {format(parseISO(createdAt), "yyyy-MM-dd HH-mm-ss")}
      </Label>
    </Wrapper>
  );
};

DashboardCard.propTypes = {
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default DashboardCard;
