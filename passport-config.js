const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const userDB = require("./modules/users/model/user");
const User = userDB.getModel();

function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    let user = await User.findOne({ email: email }).lean();
    if (user == null) {
      return done(null, false, { message: "Email/Password incorrect" });
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Email/Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));
}

module.exports = initialize;
