import * as express from "express";

import numericodeRouter from "./routes/numericode";
import { setResponseHeaders, errorHandler } from "./middleware";

const app: express.Express = express();
app.use(setResponseHeaders);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", numericodeRouter);

// error handling
app.use(errorHandler);

app.listen(8080, () => {
  console.log("App running on port 8080");
});
