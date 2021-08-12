import React from "react";
import useAxios from "axios-hooks";
import Button from "./components/Button";
import Container from "./components/Container";
import DashboardList from "./components/Dashboard-list";

function App() {
  const [{ data = [], loading, error }, refresh] = useAxios(
    "http://localhost:80/dashboards"
  );

  if (error) return <p data-testid="dashboard-fetch-error">Error!</p>;

  return (
    <Container>
      <Button disabled={loading} onClick={refresh}>
        Refresh ({data.length} Dashboards)
      </Button>
      {loading ? <p>Loading...</p> : <DashboardList data={data} />}
    </Container>
  );
}

export default App;
