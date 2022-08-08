const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const roomSchema = new mongoose.Schema({
  landlordId: {
    type: ObjectId,
    ref: "User",
  },
  location: {
    type: String,
    // required: true,
  },
  rent: {
    type: Number,
    // required: true,
  },
  isRentedTo: {
    type: ObjectId,
    ref: "Customer",
  },
  // Images: {},
  timePeriod: {
    type: Number,
  },
  Description: {
    type: String,
    // required: true,
  },
  openForRent: {
    type: Boolean,
    // required: true,
  },
  images: {
    type: String,
  },
});

module.exports = mongoose.model("Room", roomSchema);
