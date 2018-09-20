import * as express from "express";
const router = express.Router();

import { numericodeController } from "../controllers";

router.route("/numericode")
  .get(numericodeController.getNumericCode)
  .post(numericodeController.decipherCode);

export default router;
