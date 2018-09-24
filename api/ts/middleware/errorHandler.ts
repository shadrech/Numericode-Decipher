import * as express from "express";

const errorHandler = (err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  res.status(500).json(err.message);
}

export default errorHandler;