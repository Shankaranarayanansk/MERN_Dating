import Movie from "../models/movieSchema.js"; 
export const getid = (req, res) => {
    res.send("Hey guys");
}
export const update = async(req, res) => {
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
}
export const edit= (req, res) => {
    res.send({ msg: "edit" });
}
export const remove = (req, res) => {
    res.send({ msg: "delete" });
}