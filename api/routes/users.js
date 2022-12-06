const router = require("express").Router();
const verify = require("../verifyToken");
const { updateUserById, deleteUserById, getUserById, getAllUser, getUserStats } = require("../controllers/users");

//UPDATE
router.put("/:id", verify, updateUserById);

//DELETE
router.delete("/:id", verify, deleteUserById);

//GET
router.get("/find/:id", getUserById);

//GET ALL
router.get("/", verify, getAllUser);

//GET USER STATS
router.get("/stats", getUserStats);

module.exports = router;
