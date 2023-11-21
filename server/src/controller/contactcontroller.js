const router = require("express").Router();
const contactDataModel = require("../model/contactmodel");

router.post("/contact", async (req, res) => {
  const { Name, Email, PhoneNumber } = req.body;
  console.log(req.body);
  const contact_data = new contactDataModel({
    Name,
    Email,
    PhoneNumber
  });
  await contact_data.save();
  res.send("Data posted");
});

module.exports = router;
