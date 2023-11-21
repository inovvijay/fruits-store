const router = require("express").Router();
const userDataModel = require("../model/usermodel");
const passport = require("passport");
const CLIENT_URL = "http://localhost:3000/";

const validateSignupData = (req, res, next) => {
  const { userName, userEmail, userPassword } = req.body;

  if (!userName || !userEmail || !userPassword) {
    return res
      .status(400)
      .json({ error: "Please provide all required fields" });
  }
  next();
};

router.post("/signup", validateSignupData, async (req, res) => {
  const { userName, userEmail, userPassword } = req.body;
  console.log(req.body);

  try {
    const existingUser = await userDataModel.findOne({ userEmail });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const user_data = new userDataModel({
      userName,
      userEmail,
      userPassword
    });

    await user_data.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const validateSigninData = (req, res, next) => {
  const { userName, userPassword } = req.body;

  // Check if required fields are present
  if (!userName || !userPassword) {
    return res
      .status(400)
      .json({ error: "Please provide both username and password" });
  }

 
  next();
};

// Signin route with validation middleware
router.post("/signin", validateSigninData, async (req, res) => {
  const { userName, userPassword } = req.body;
  console.log(req.body);

  try {
    const usersigninData = await userDataModel.findOne({
      userName,
      userPassword
    });

    
    if (!usersigninData) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    res.status(200).json({ usersigninData });
  } catch (error) {
    console.error("Error during signin:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/* Google Login */
// --------------------Login----------------------------//

router.get("/login/success", (req, res) => {
  if (req.user) {
    // console.log(req.user)
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure"
  });
});

router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      console.error(err);
    }
    res.redirect(CLIENT_URL);
  });
});

//  --- google  --

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed"
  })
);

module.exports = router;
