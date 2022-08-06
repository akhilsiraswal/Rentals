const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobNo: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  hasRented: {
    type: Boolean,
  },

  Rent: Number,

  RoomId: [
    {
      type: ObjectId,
      ref: "Room",
    },
  ],
  RoomsForRent: [
    {
      type: ObjectId,
      ref: "Room",
    },
  ],
  savedRooms: [
    {
      type: ObjectId,
    },
  ],

  rentTimePerior: Date,
});

module.exports = mongoose.model("User", userSchema);
