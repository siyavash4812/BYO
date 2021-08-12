const sql = require("../db.js");

// constructor
const Dashboard = function (dashboard) {
  this.title = dashboard.title;
};

Dashboard.getAll = (result) => {
  sql.query("SELECT * FROM dashboards", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

module.exports = Dashboard;
