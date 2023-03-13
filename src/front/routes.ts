import { Router } from 'express';

const frontRouter = Router();

frontRouter.get("/", (req, res, next) => {
    res.render("template", {
      pageTitle: "pomodoro",
    });
  });


export default frontRouter;