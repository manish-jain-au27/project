const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});
const customerModel = mongoose.model("customerlist", customerSchema);
module.exports = customerModel;
