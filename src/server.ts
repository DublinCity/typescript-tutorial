// entry point at express app
import express, { ErrorRequestHandler } from "express";
import logger from "morgan";
import path from "path";

import { Request } from "express-serve-static-core";
import mandalart from "./controllers/mandalart";
import { sequelize } from "./models";

interface IErrorWithStatus extends Error {
  status?: number;
}

const app = express();
sequelize.sync();
app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "/../views"));

app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

            app.get("/", (req, res) => {
                    res.render("index");
            });

app.use("/mandalart", mandalart);

// // catch 404 and forward to error handler
app.use((req, res, next) => {
  const err: IErrorWithStatus = new Error("Not Found");
  err.status  = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(((err, req, res, next) => {
  res.status(err.status || 500);
  res.render("error", {
    error: (app.get("env") === "development") ? err : {},
    message: err.message,
  });
}) as ErrorRequestHandler);

app.listen(3030, () => {
  console.log("express listen on port:3000");
});
