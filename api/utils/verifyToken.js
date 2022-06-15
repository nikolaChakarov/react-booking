const jwt = require("jsonwebtoken");
const { createError } = require("../utils/error");

exports.verifyToken = (req, res, next) => {
	const token = req.cookies["x-auth-token"];

	if (!token) {
		return next(createError(401, "You are not authenticated!"));
	}

	jwt.verify(token, process.env.SECRET, (err, data) => {
		if (err) {
			return next(createError(403, "Token is not valid!"));
		}

		req.user = { ...data };
		next();
	});
};

exports.verifyUser = (req, res, next) => {
	this.verifyToken(req, res, () => {
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			return next(createError(403, "You are not authorized!"));
		}
	});
};
