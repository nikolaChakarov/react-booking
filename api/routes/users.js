const router = require("express").Router();

const {
	updateUser,
	deleteUser,
	getUserById,
	getAllUsers,
} = require("../controllers/user.controller");

const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
// 	res.send("hello user, you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
// 	res.send("hello user, you are logged in and you can delete your account");
// });

// router.get("/checkadmin/:id", isAdmin, (req, res, next) => {
// 	res.send("hello admin, you can delete all accounts");
// });

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUserById);

// GET ALL
router.get("/", verifyAdmin, getAllUsers);

module.exports = router;
