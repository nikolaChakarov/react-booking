const router = require("express").Router();
const Hotel = require("../models/Hotel");

// CREATE
router.post("/", async (req, res) => {
	try {
		const newHotel = new Hotel(req.body);

		await newHotel.save();

		res.status(200).json({ status: "success", data: newHotel });
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err.message });
	}
});

// UPDATE
// GET
// GET ALL

module.exports = router;
