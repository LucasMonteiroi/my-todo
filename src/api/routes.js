const express = require('express');
const routes = express.Router();

const HelloController = require('./controllers/helloController');

routes.get('/api', async (req, res) => HelloController.getAll(req, res));

module.exports = routes;