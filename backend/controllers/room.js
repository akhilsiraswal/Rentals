const User = require("../models/user");
// const formidable = require("formidable");
const Room = require("../models/room");

exports.createRoom = (req, res) => {
  const room = new Room({
    landlordId: req.profile._id,
    rent: req.body.rent,
    description: req.body.description,
    openForRent: req.body.openForRent,
  });

  if (req.file) {
    room.image = req.file.path;
  }

  room
    .save()
    .then((err, room) => {
      if (err) {
        res.status(500).json({
          error: err,
        });
      }

      res.status(200).json({
        room,
      });
    })
    .catch((err) => {
      console.log("error occured /controllers/room.js/createRoom");
    });
};

exports.updateRoom = (req, res) => {
  let room = req.room;

  room.path = req.file.path;

  room
    .save()
    .then((err, room) => {
      if (err) {
        res.status(500).json({
          error: err,
        });
      }

      res.status(200).json({
        message: "updation successful",
      });
    })
    .catch((err) => console.log(err));
};

exports.deleteRoom = (req, res) => {
  let room = req.room;
  room
    .remove()
    .then((err, room) => {
      if (err) {
        res.status(500).json({
          error: "error in deleting the product",
        });
      }

      res.status(200).json({
        message: "successfuly deleted",
      });
    })
    .catch();
};

exports.showRooms = () => {
  Room.find()
    .then((err, rooms) => {
      if (err) {
        res.status(500).json({
          error: err,
        });
      }
      res.status(200).json(rooms);
    })
    .catch((err) => console.log("error", err));
};

exports.showRoomsAccordingToLocation = (req, res) => {};
exports.showUserRoom = (req, res) => {};

exports.showRentedRooms = () => {
  Room.find({ isRentedTo: true })
    .then((err, rooms) => {
      if (err) {
        res.status(404).json({
          error: err,
        });
      }
      res.status(200).json(rooms);
    })
    .catch();
};
