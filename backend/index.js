const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { dashboardRoutes } = require("./routes");
const app = express();

app.use(cors());
// parse requests of content-type: application/json
app.use(bodyParser.json());

// simple route
app.use("/", dashboardRoutes);

// set port, listen for requests
app.listen(80, () => {
  console.log("Server is running on port 80.");
});
