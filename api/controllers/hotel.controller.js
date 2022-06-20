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
		const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);

		res.status(200).json({ status: "success", data: deletedHotel });
	} catch (err) {
		next(err);
	}
};

exports.getHotelById = async (req, res, next) => {
	// console.log(req.params);

	try {
		const hotel = await Hotel.findById(req.params.id);

		res.status(200).json({ status: "success", data: hotel });
	} catch (err) {
		next(err);
	}
};

exports.getAllHotels = async (req, res, next) => {
	const { min, max, ...others } = req.query;

	// console.log(req.query);

	try {
		const hotels = await Hotel.find({
			...others,
			cheapestPrice: { $gte: min || 1, $lte: max || 1000 },
		}).limit(req.query.limit);

		res.status(200).json({ status: "success", data: hotels });
	} catch (err) {
		next(err);
	}
};

exports.countByCity = async (req, res, next) => {
	try {
		const cities = req.query.cities.split(",");

		let list = await Promise.all(
			cities.map((city) => Hotel.countDocuments({ city: city }))
			// cities.map((city) => Hotel.find({ city: city }))
		);

		// list = list.map((el) => el.length);

		res.status(200).json({ status: "success", data: list });
	} catch (err) {
		next(err);
	}
};

exports.countByType = async (req, res, next) => {
	const types = ["hotel", "resort", "appartment", "villa", "cabin"];
	try {
		let list = await Promise.all(types.map((el) => Hotel.find({ type: el })));

		list = list
			.map((el) => el.length)
			.map((el, i) => {
				return {
					type: types[i],
					count: el,
				};
			});

		res.status(200).json({ status: "success", data: list });
	} catch (err) {
		next(err);
	}
};
