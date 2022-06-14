const router = require("express").Router();

router.get("/", (req, res) => {
	res.send("auth endpoint");
});

module.exports = router;
