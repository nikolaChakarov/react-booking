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
router.put("/:id", async (req, res) => {
	try {
		const updatedHotel = await Hotel.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);

		res.status(200).json({ status: "success", data: updatedHotel });
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err.message });
	}
});

// DELETE
router.delete("/:id", async (req, res) => {
	try {
		const deletedHotes = await Hotel.findByIdAndDelete(req.params.id);

		res.status(200).json({ status: "success", data: deletedHotes });
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err.message });
	}
});

// GET
router.get("/:id", async (req, res) => {
	try {
		const hotel = await Hotel.findById(req.params.id);

		res.status(200).json({ status: "success", data: hotel });
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err.message });
	}
});

// GET ALL
router.get("/", async (req, res) => {
	try {
		const hotels = await Hotel.find();

		res.status(200).json({ status: "success", data: hotels });
	} catch (err) {
		console.log(err);
		res.status(500).json({ status: "fail", message: err.message });
	}
});

module.exports = router;
