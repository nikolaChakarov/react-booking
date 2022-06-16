const router = require("express").Router();
const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

const {
	createRoom,
	updateRoom,
	deleteRoom,
	getRoomById,
	getAllRooms,
} = require("../controllers/room.controller");

// CREATE
router.post("/:hotelId", verifyAdmin, createRoom);

// UPDATE
router.put("/:id", verifyAdmin, updateRoom);

// DELETE
router.delete("/:roomId/:hotelId", verifyAdmin, deleteRoom);

// GET
router.get("/:id", getRoomById);

// GET ALL ROOMS
router.get("/", getAllRooms);

module.exports = router;
