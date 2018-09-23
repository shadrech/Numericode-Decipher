import * as express from "express";

import numericodeRouter from "./routes/numericode";
import { setResponseHeaders } from "./middleware";

const app: express.Express = express();
app.use(setResponseHeaders);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", numericodeRouter);

// error handling
app.use(function(err, req: express.Request, res: express.Response, next: express.NextFunction) {
  console.log("AN ERROR!!!", err.message);
});

app.listen(8080, () => {
  console.log("App running on port 8080");
});
