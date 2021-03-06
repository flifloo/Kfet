const createError = require("http-errors");
const express = require("express");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const config = require("./config/config.json");

const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const commandsRouter = require("./routes/commands");
const kitchenRouter = require("./routes/kitchen");
const menuRouter = require("./routes/menu");
const serviceRouter = require("./routes/service");
const stocksRouter = require("./routes/stocks");

const app = express();
const sess = {
  key: "userSId",
  secret: config.secret,
  resave: false,
  saveUninitialized: false,
  cookie: {}
}

if (app.get("env") === "production") {
  app.set("trust proxy", 1);
  sess.cookie.secure = true;
}

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session(sess));
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  if (req.cookies.userSId && !req.session.user)
    res.clearCookie("userSId");
  next();
});

app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/commands", commandsRouter);
app.use("/kitchen", kitchenRouter);
app.use("/menu", menuRouter);
app.use("/stocks", stocksRouter);
app.use("/service", serviceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
