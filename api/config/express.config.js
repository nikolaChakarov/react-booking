const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = require("../router");

const handleError = require("../middlewares/handleError");

const expressConfig = (app) => {
	app.use(
		cors({
			origin: "http://localhost:3000",
		})
	);

	app.use(cookieParser());

	app.use(express.json());

	app.use(router);

	app.use(handleError);
};

module.exports = expressConfig;
