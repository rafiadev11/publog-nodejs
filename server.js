if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
// Use absolute static directory
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
// Prevent "POST" of nested objects
app.use(express.urlencoded({ extended: false }));
// set up the view engine
const exphbs = require("express-handlebars");
app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

// set up passport local Auth
const passport = require("passport");
const initializePassport = require("./passport-config");
initializePassport(passport);
const session = require("express-session")({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
});
app.use(session);
const flash = require("express-flash");
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//allow use of HTTP verbs (PUT, PATCH, DELETE...)
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
// Routes
let articleRoutes = require("./modules/articles/routes");
let apiRoutes = require("./modules/api/routes");
let userRoutes = require("./modules/users/routes");
app.use(userRoutes, articleRoutes, apiRoutes);
app.listen(8000);
