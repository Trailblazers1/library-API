
import { LibraryModel } from "../models/library-models.js";

export const addBook = (req, res, next) => {
    res.json('A book has been added');
}
export const getAllBooks = (req, res, next) => {
    res.json('Get all books');
}
export const getOneBook = (req, res, next) => {
    res.json('Get one book');
}
export const updateBook = (req, res, next) => {
    res.json('A book has updated');
}
export const deleteBook = (req, res, next) => {
    res.json('A book has been deleted');
}