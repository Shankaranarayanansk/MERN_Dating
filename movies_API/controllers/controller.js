import Movie from "../models/movieSchema.js";
import express from "express"
const app = express();
app.use(express.json());
export const getid = async (req, res) => {
    try {
      const getMovie = await Movie.find();
      res.json(getMovie); // Just return the movie data
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
export const update = async (req, res) => {
  try {
    console.log(req.body);

    const newMovie = new Movie({
      title: req.body.title,
      desc: req.body.desc,
    });
    const movie = await newMovie.save();
    return res.json(movie); // Return the saved movie instead of req.body
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ msg: "Internal Server Error" }); // Send error response
  }
};
export const edit = (req, res) => {
  res.send({ msg: "edit" });
};
export const remove = (req, res) => {
  res.send({ msg: "delete" });
};
