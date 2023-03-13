import { Router } from 'express';

const apiRouter = Router();

apiRouter.get('/', (req, res, next) => {
    res.json({ ping: 'pong' })
})

export default apiRouter;