const router = require("express").Router();

const {
	createHotel,
	updateHotel,
	deleteHotel,
	getHotelById,
	getAllHotels,
} = require("../controllers/hotel.controller");

// CREATE HOTEL
router.post("/", createHotel);

// UPDATE HOTEL
router.put("/:id", updateHotel);

// DELETE HOTEL
router.delete("/:id", deleteHotel);

// GET HOTEL BY ID
router.get("/:id", getHotelById);

// GET ALL HOTELS
router.get("/", getAllHotels);

module.exports = router;
