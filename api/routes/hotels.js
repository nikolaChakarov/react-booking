const router = require("express").Router();

const {
	createHotel,
	updateHotel,
	deleteHotel,
	getHotelById,
	getAllHotels,
} = require("../controllers/hotel.controller");

const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

// CREATE HOTEL
router.post("/", verifyAdmin, createHotel);

// UPDATE HOTEL
router.put("/:id", verifyAdmin, updateHotel);

// DELETE HOTEL
router.delete("/:id", verifyAdmin, deleteHotel);

// GET HOTEL BY ID
router.get("/:id", getHotelById);

// GET ALL HOTELS
router.get("/", getAllHotels);

module.exports = router;
