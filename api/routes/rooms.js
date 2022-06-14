const router = require("express").Router();

router.get("/", (req, res) => {
	res.send("rooms endpoint");
});

module.exports = router;
