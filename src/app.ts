import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import apiRouter from './api/routes';
import frontRouter from './front/routes';
import globalErrorHandler from './middlewares/globalErrorHandler';

export default class App {
  private static middlewares(app: any) {
    app.use(globalErrorHandler)
    app.use(bodyParser.json());
    app.use(cors({ origin: true }));
    app.use(express.json());

    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "front", "views"));
    app.use(express.static(path.join(__dirname, "front", "public")));
  }

  private static routes(app: any) {
    app.use('/api', apiRouter);
    app.use(frontRouter);
  }

  static setup(app: any) {
    this.middlewares(app);
    this.routes(app);
  }
}