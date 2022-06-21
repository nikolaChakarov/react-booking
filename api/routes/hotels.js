const router = require("express").Router();

const {
	createHotel,
	updateHotel,
	deleteHotel,
	getHotelById,
	getAllHotels,
	countByCity,
	countByType,
	getHotelRooms,
} = require("../controllers/hotel.controller");

const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

// CREATE HOTEL
router.post("/", verifyAdmin, createHotel);

// UPDATE HOTEL
router.put("/:id", verifyAdmin, updateHotel);

// DELETE HOTEL
router.delete("/:id", verifyAdmin, deleteHotel);

// GET HOTEL BY ID
router.get("/find_hotel_by_id/:id", getHotelById);

// GET ALL HOTELS
router.get("/", getAllHotels);

// QUERY HOTEL BY CITY NAMES
router.get("/countByCity", countByCity);

router.get("/countByType", countByType);

// FETCH HOTEL ROOMS
router.get("/rooms/:hotelId", getHotelRooms);

module.exports = router;
