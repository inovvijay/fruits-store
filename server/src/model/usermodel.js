const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: String,
    googleId: String,
    email: String,
    userPassword: String,
    userPhoneNumber: Number,
    userProfile: String
  },
  { timestamps: true }
);

const userDataModel = mongoose.model("user-data", userSchema);
module.exports = userDataModel;
