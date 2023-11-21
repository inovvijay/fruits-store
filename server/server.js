const express = require("express");
const session = require("express-session");
const app = express();
const passport = require("passport");
const passportSetup = require("./passport");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("./src/config/db");

const userController = require("./src/controller/usercontroller");
const contactController = require("./src/controller/contactcontroller");

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());

// Configure Express session
app.use(
  session({
    secret: "Fruits Store",
    resave: false,
    saveUninitialized: false
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use("/", userController);
app.use("/", contactController);
app.use("/auth", userController);

app.listen(PORT, () => {
  console.log(`Server listening at the PORT: ${PORT}`);
});
