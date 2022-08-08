const express = require("express");
const { createRoom, getRoomById, updateRoom } = require("../controllers/room");
const { getUserById } = require("../controllers/user");
const upload = require("../middlewares/upload");

const router = express.Router();

router.param("userId", getUserById);
router.param("roomId", getRoomById);
router.post("/createRoom/:userId", upload.single("images"), createRoom);
router.put("/updateRoom/:roomId", updateRoom);

module.exports = router;
