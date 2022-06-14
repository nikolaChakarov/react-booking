const router = require("express").Router();

router.use("/api/auth", require("./routes/auth"));
router.use("/api/hotels", require("./routes/hotels"));
router.use("/api/rooms", require("./routes/rooms"));
router.use("/api/users", require("./routes/users"));

module.exports = router;
