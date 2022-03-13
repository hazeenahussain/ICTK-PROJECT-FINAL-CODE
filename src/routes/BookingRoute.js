const router = require("express").Router();
const booking = require("../models/BookingModel");

router.post("/addbooking", async (req, res) => {
  try {
    console.log(req.body);
    let mydata = new bookingModelObj(req.body);
    let data = await mydata.save();
    console.log("Successfully Added Hall");
    res.send("Successfully Added Hall");
  } catch (err) {
    console.log(err);
  }
});

// router.get("/viewbooking", async (req, res) => {
//   try {
//     let result = await bookingModelObj.find();
//     res.json(result);
//   } catch (err) {
//     console.log(err);
//   }
// });

router.post("/updatebooking", async (req, res) => {
  try {
    console.log(req.body);
    let result = await bookingModelObj.updateOne(
      { ictkid: req.body.ictkid },
      {
        $set: {
          hall: req.body.hall,
          date: req.body.date,
          start: req.body.start,
          end: req.body.end,
          event: req.body.event,
        },
      }
    );
    console.log("Successfully Updated Hall Booking with : " + req.body.ictkid);
    res.send("Updated" + req.body.ictkid);
  } catch (err) {
    console.log(err);
  }
});

router.post("/deletebooking", async (req, res) => {
  try {
    let result = await bookingModelObj.deleteOne({
      ictkid: req.body.ictkid,
    });
    console.log("Successfully Deleted Hall Details : " + req.body.ictkid);
    res.send("Deleted" + req.body.ictkid);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
