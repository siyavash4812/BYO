import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DashboardCard from "./Dashboard-card";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DashboardList = ({ data }) => {
  return (
    <Wrapper data-testid="dashboard-list">
      {data.map(({ id, createdAt, title }) => (
        <DashboardCard key={id} createdAt={createdAt} title={title} />
      ))}
    </Wrapper>
  );
};

DashboardList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DashboardList;
