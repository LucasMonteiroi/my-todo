const path = require("path");
const express = require('express');
const apiRoutes = require('./api/routes');
const frontRoutes = require('./front/routes');

class App {
    constructor() {
      this.server = express();
  
      this.middlewares();
      this.routes();
    }
  
    middlewares() {
      this.server.use(express.json());
      this.server.set("view engine", "ejs");
      this.server.set("views", path.join(__dirname, "front", "views"));
      this.server.use(express.static(path.join(__dirname, "front", "public")));
    }
  
    routes() {
      this.server.use(apiRoutes);
      this.server.use(frontRoutes);
    }
  
  }
  
  module.exports = new App().server;