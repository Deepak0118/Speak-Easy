import express from "express";
import passport from "passport";
import session from "express-session";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';
import firebaseAdmin from "./firebase.js"; // make sure this is also ES module style

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


app.use(session({
  secret: process.env.SESSION_SECRET || "defaultsecret",
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// Static files
app.use(express.static(path.join(__dirname, 'images1')));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Basic.html"));
});

app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

// Passport config
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: "1076848820034-fa4mc9j3ogu840m0ohjioqgqc2hp64cq.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "/auth/google/callback",
},
async (accessToken, refreshToken, profile, done) => {
  // Save user info to Firestore
  try {
    const db = firebaseAdmin.firestore();
    await db.collection('users').doc(profile.id).set({
      uid: profile.id,
      name: profile.displayName,
      email: profile.emails?.[0]?.value || '',
      photo: profile.photos?.[0]?.value || '',
      lastLogin: new Date().toISOString(),
    }, { merge: true });
  } catch (err) {
    console.error("Error saving to Firestore:", err);
  }

  return done(null, profile);
}));

// Auth Routes
app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/");
  }
);

// Start server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
