import { Schema, model,Types } from "mongoose";

const librarySchema = new Schema({
    title: {type: String, required: true},
    summary: {type: String, required: true},
    year:{type: Number, required: true},
    author: {type: Types.ObjectId, ref: 'Author', required:true},
    cover: {type: String, required: true},
    genre: {type: String, required: true},
   content: { type: String, required: true}

});
export const LibraryModel = model('Library', librarySchema);