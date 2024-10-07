import { Schema, model } from "mongoose";

const librarySchema = new Schema({
    title: {type: String, required: true},
    completed: {type: Boolean, default: false},
});

export const LibraryModel = model('library', librarySchema);