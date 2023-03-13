const express = require('express');
const routes = express.Router();

routes.get("/", (req, res, next) => {
  res.render("template", {
    pageTitle: "pomodoro",
  });
});

module.exports = routes;