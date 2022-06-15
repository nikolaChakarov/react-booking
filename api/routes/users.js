const router = require("express").Router();

const {
	updateUser,
	deleteUser,
	getUserById,
	getAllUsers,
} = require("../controllers/user.controller");

const { verifyToken, verifyUser } = require("../utils/verifyToken");

router.get("/checkauthentication", verifyToken, (req, res, next) => {
	res.send("hello user, you are logged in");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
	res.send("hello user, you are logged in and you can delete your account");
});

router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUserById);
router.get("/", getAllUsers);

module.exports = router;
