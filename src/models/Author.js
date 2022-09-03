import mongoose from "mongoose"

const authorSchema = new mongoose.Schema(
    {
        id:{type: String},
        name:{type: String, required: true},
        birthplace:{type: String},
        yearOfBirth:{type: Number}
    }
);

const authors = mongoose.model('authors', authorSchema);

export default authors;