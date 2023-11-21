const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    Name: String,
    Email: String,
    PhoneNumber:Number
  },
  { timestamps: true }
);

const contactDataModel = mongoose.model("contact_data", contactSchema);
module.exports = contactDataModel;
