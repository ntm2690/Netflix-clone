const router = require("express").Router();
const { createMovies, updateMovieById, deleteMovieById, getMovieById, getMovieRandom, getAllMovies } = require("../controllers/movies");
const verify = require("../verifyToken");

//CREATE

router.post("/", verify, createMovies)

//UPDATE

router.put("/:id", verify, updateMovieById);

//DELETE

router.delete("/:id", verify, deleteMovieById);

//GET

router.get("/find/:id", verify, getMovieById);

//GET RANDOM

router.get("/random", verify, getMovieRandom);

//GET ALL

router.get("/", verify, getAllMovies);

module.exports = router;
