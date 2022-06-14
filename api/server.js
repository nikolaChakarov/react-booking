require("dotenv").config();
const PORT = process.env.PORT;

const mongoose = require("mongoose");

const express = require("express");
const app = express();
const expressConfig = require("./config/express.config");

expressConfig(app);

const mongooseConfig = require("./config/mongoose.config");

mongooseConfig()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`server is running at port ${PORT}`);
		});
	})
	.catch((err) => console.log(err));
