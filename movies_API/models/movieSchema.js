import { model, Schema } from "mongoose";

const Schema = new Schema({
    title:String,
    review :String
})


const Movie = model("Movie",Schema)
export default Movie 