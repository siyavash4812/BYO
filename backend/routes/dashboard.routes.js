var express = require('express')
var router = express.Router()

const dashboards = require("../controllers/dashboard.controller.js");

router.get("/dashboards", dashboards.findAll);

module.exports = router