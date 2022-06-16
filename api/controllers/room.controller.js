const Room = require("../models/Room");
const Hotel = require("../models/Hotel");
const { createError } = require("../utils/error");

exports.createRoom = async (req, res, next) => {
	const hotelId = req.params.hotelId;
	const newRoom = new Room(req.body);

	try {
		const savedRoom = await newRoom.save();

		await Hotel.findByIdAndUpdate(hotelId, {
			$push: { rooms: savedRoom._id },
		});

		res.status(200).json({ success: true, room: savedRoom });
	} catch (err) {
		next(err);
	}
};

exports.updateRoom = async (req, res, next) => {
	try {
		const updatedRoom = await Room.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);

		res.status(200).json({ status: "success", data: updatedRoom });
	} catch (err) {
		next(err);
	}
};

exports.deleteRoom = async (req, res, next) => {
	try {
		const deletedRoom = await Room.findByIdAndDelete(req.params.roomId);

		if (!deletedRoom) {
			return next(createError(404, "no such a room"));
		}

		await Hotel.findByIdAndUpdate(req.params.hotelId, {
			$pull: { rooms: req.params.roomId },
		});

		res.status(200).json({ status: "success", data: deletedRoom });
	} catch (err) {
		next(err);
	}
};

exports.getRoomById = async (req, res, next) => {
	try {
		const room = await Room.findById(req.params.id);

		res.status(200).json({ status: "success", data: room });
	} catch (err) {
		next(err);
	}
};

exports.getAllRooms = async (req, res, next) => {
	try {
		const rooms = await Room.find();

		res.status(200).json({ status: "success", data: rooms });
	} catch (err) {
		next(err);
	}
};
