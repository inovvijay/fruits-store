const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: String,
    userEmail: String,
    userPassword: String,
    userPhoneNumber:Number
  },
  { timestamps: true }
);

const userDataModel = mongoose.model("user-data", userSchema);
module.exports = userDataModel;