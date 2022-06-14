const Hotel = require("../models/Hotel");

exports.createHotel = async (req, res, next) => {
	try {
		const newHotel = new Hotel(req.body);

		await newHotel.save();

		res.status(200).json({ status: "success", data: newHotel });
	} catch (err) {
		next(err);
	}
};

exports.updateHotel = async (req, res, next) => {
	try {
		const updatedHotel = await Hotel.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);

		res.status(200).json({ status: "success", data: updatedHotel });
	} catch (err) {
		next(err);
	}
};

exports.deleteHotel = async (req, res, next) => {
	try {
		const deletedHotes = await Hotel.findByIdAndDelete(req.params.id);

		res.status(200).json({ status: "success", data: deletedHotes });
	} catch (err) {
		next(err);
	}
};

exports.getHotelById = async (req, res, next) => {
	try {
		const hotel = await Hotel.findById(req.params.id);

		res.status(200).json({ status: "success", data: hotel });
	} catch (err) {
		next(err);
	}
};

exports.getAllHotels = async (req, res, next) => {
	try {
		const hotels = await Hotel.find();

		res.status(200).json({ status: "success", data: hotels });
	} catch (err) {
		next(err);
	}
};
