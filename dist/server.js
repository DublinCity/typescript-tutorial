"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// entry point at express app
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const mandalart_1 = __importDefault(require("./controllers/mandalart"));
const models_1 = require("./models");
const app = express_1.default();
models_1.sequelize.sync();
app.use(morgan_1.default("dev"));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.set("views", path_1.default.join(__dirname, "/../views"));
app.set("view engine", "pug");
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    res.render("index");
});
app.use("/mandalart", mandalart_1.default);
// // catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
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
}));
app.listen(3030, () => {
    console.log("express listen on port:3000");
});
//# sourceMappingURL=server.js.map