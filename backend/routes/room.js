const express = require("express");
const { createRoom } = require("../controllers/room");
const { getUserById } = require("../controllers/user");
const upload = require("../middlewares/upload");

const router = express.Router();

router.params("/:userId", getUserById);

router.post("/createRoom/:userId", upload, createRoom);
