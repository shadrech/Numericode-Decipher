import * as express from "express";

import numericodeRouter from "./routes/numericode";

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", numericodeRouter);

// error handling
app.use(function(err, req: express.Request, res: express.Response, next) {
  console.log(err.message);
});

app.listen(8080, () => {
  console.log("App running on port 8080");
});
