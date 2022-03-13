const router = require("express").Router();
const booking = require("../models/UserModel");

router.post("/api/signup", async (req, res) => {
  try {
    console.log(req.body);
    let mydata = new userModelObj(req.body);
    let data = await mydata.save();
    res.send("Successfully Added Data");
  } catch (err) {
    console.log(err);
  }
});

router.get("/api/login", async (req, res) => {
  try {
    let result = await userModelObj.find();
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
