const express = require("express");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
const path = require("path");

const app = express();  

app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'images1')));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Basic.html"));
});




passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});


passport.use(new GoogleStrategy({
    clientID:"1079406450809-sc39m100au0pbkki6mc1lv6ibbgs7qcb.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL: "/auth/google/callback"
  },
  function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));


app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/");
  }
);

app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});
