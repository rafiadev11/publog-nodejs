let express = require("express");
const passport = require("passport");

const isAuth = require("./auth/isAuth");
const isGuest = require("./auth/isGuest");
let login = require("./login");

let router = express.Router();
router.get("/login", isGuest, login);
router.post(
  "/login",
  isGuest,
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
  })
);
router.delete("/logout", isAuth, (req, res) => {
  req.logOut();
  res.redirect("/login");
});
module.exports = router;
