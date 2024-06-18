import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    movie_name:{
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
})


export default mongoose.model("User", userSchema);