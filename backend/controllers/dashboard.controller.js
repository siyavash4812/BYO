const Dashboard = require("../models/dashboard.model.js");

exports.findAll = (req, res) => {
  Dashboard.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Dashboards."
      });
    else res.send(data);
  });
};