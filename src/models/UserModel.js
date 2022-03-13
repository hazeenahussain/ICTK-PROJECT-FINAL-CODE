const mongoose = require("mongoose");
let mongooseSchema = mongoose.Schema;
const userSchema = new mongooseSchema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
var userModelObj = mongoose.model("users", userSchema);
module.exports = { userModelObj };
