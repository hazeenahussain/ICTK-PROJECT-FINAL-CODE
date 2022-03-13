const router = require("express").Router();
const booking = require("../models/AssociateModel");

router.post("/api/add", async (req, res) => {
  try {
    console.log(req.body);
    let mydata = new associateModelObj(req.body);
    let data = await mydata.save();
    console.log("Successfully Added Data");
    res.send("Successfully Added Data");
  } catch (err) {
    console.log(err);
  }
});

router.get("/api/view", async (req, res) => {
  try {
    let result = await associateModelObj.find();
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});
// title==ictkid
router.post("/api/delete", async (req, res) => {
  try {
    let result = await associateModelObj.deleteOne({ ictkid: req.body.ictkid });
    console.log("Successfully Deleted Associate Details  : " + req.body.ictkid);
    res.send("Deleted" + req.body.ictkid);
  } catch (err) {
    console.log(err);
  }
});

router.post("/api/update", async (req, res) => {
  try {
    console.log(req.body);
    let result = await associateModelObj.updateOne(
      { ictkid: req.body.ictkid },
      {
        $set: {
          username: req.body.username,
          content: req.body.content,
          course: req.body.course,
        },
      }
    );
    console.log("Successfully Updated  : " + req.body.ictkid);
    res.send("Updated" + req.body.ictkid);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
