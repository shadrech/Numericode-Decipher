import * as express from "express";
import { numericodeModel } from "../models";

export async function getNumericode(req: express.Request, res: express.Response): Promise<void> {
  const code = await numericodeModel.getNumericode();
  res.status(200).json({
    code
  });
}

export async function handleNumericodeInput(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
  const { code } = req.body;
  let text;
  try {
    text = numericodeModel.decipherCode(code);
    await numericodeModel.persistNumericode(code);
    res.status(200).json(text);
  } catch (error) {
    next(error);
  }
}