const router = require("express").Router();

const { verifyToken } = require("./utils/verifyToken");

router.use("/api/auth", require("./routes/auth"));

router.use("/api/users", verifyToken, require("./routes/users"));

router.use("/api/hotels", require("./routes/hotels"));

router.use("/api/rooms", require("./routes/rooms"));

module.exports = router;
