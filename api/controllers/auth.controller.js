const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { createError } = require("../utils/error");

exports.register = async (req, res, next) => {
	try {
		const { username, email, password } = req.body;

		const hashed = await bcrypt.hash(password, Number(process.env.SALT));

		const newUser = new User({ username, email, password: hashed });

		await newUser.save();

		res.status(201).json({
			success: true,
			user: newUser,
		});
	} catch (err) {
		next(err);
	}
};

exports.login = async (req, res, next) => {
	try {
		const user = await User.findOne({ username: req.body.username });

		if (!user) {
			return next(createError(404, "User not found!"));
		}

		const isPassOk = await bcrypt.compare(req.body.password, user.password);

		if (!isPassOk) {
			return next(createError(404, "Wrong password ou username!"));
		}

		const token = jwt.sign(
			{
				id: user._id,
				isAdmin: user.isAdmin,
			},
			process.env.SECRET,
			{ expiresIn: 3600000 }
		);

		const { password, isAdmin, ...rest } = user._doc;

		res.cookie("x-auth-token", token, { httpOnly: true }).status(201).json({
			success: true,
			user: rest,
		});
	} catch (err) {
		next(err);
	}
};
