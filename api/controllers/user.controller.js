const User = require("../models/User");

exports.updateUser = async (req, res, next) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);

		res.status(200).json({ status: "success", data: updatedUser });
	} catch (err) {
		next(err);
	}
};

exports.deleteUser = async (req, res, next) => {
	try {
		const deletedUser = await User.findByIdAndDelete(req.params.id);

		res.status(200).json({ status: "success", data: deletedUser });
	} catch (err) {
		next(err);
	}
};

exports.getUserById = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);

		res.status(200).json({ status: "success", data: user });
	} catch (err) {
		next(err);
	}
};

exports.getAllUsers = async (req, res, next) => {
	try {
		const users = await User.find();

		res.status(200).json({ status: "success", data: users });
	} catch (err) {
		next(err);
	}
};
