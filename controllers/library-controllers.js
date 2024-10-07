
import { LibraryModel } from "../models/library-models.js";

export const addBook = async (req, res, next) => {
try {
    await LibraryModel.create(req.body);

    res.status(201).json('A book has been added');

} catch (error) {
    next(error);
}
}


export const getAllBooks = async (req, res, next) => {
    try {
        const books = await LibraryModel.find();
        res.status(200).json('Get all books');
    } catch (error) {
       next(error); 
    }
    
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