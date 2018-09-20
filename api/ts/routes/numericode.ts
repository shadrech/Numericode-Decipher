import * as express from "express";
const router = express.Router();

import { numericodeController } from "../controllers";

router.route("/numericode")
  .get(numericodeController.getNumericode)
  .post(numericodeController.handleNumericodeInput);

export default router;
