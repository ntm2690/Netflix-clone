const router = require("express").Router();
const { createListMovie, deleteListMovieById, getList } = require("../controllers/lists");
const verify = require("../verifyToken");

//CREATE

router.post("/", verify, createListMovie);

//DELETE

router.delete("/:id", verify, deleteListMovieById);

//GET

router.get("/", verify, getList);

module.exports = router;
