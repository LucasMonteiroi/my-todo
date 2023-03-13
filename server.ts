require('dotenv/config');
import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import App from './src/app';

const port = process.env.PORT || 3000;
const server = express();
App.setup(server);

console.log(`Running on: ${process.env.NODE_ENV}`)
server.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});
