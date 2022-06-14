const router = require("express").Router();

router.get("/", (req, res) => {
	res.send("users endpoint");
});

module.exports = router;
