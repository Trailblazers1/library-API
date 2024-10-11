import { LibraryModel } from "../models/library-models.js";

// Add a new book to the library
export const addBook = async (req, res, next) => {
    try {
        const bookPost = await LibraryModel.create(req.body);
        res.status(201).json(bookPost);
    } catch (error) {
        next(error);
    }
};

// Get all books or search books based on query parameters
export const getAllBooks = async (req, res, next) => {
    try {
        const { title, author, genre } = req.query;
        let searchQuery = {};
        if (title) searchQuery.title = { $regex: title, $options: 'i' };
        if (author) searchQuery.author = { $regex: author, $options: 'i' };
        if (genre) searchQuery.genre = { $regex: genre, $options: 'i' };

        const books = await LibraryModel.find(searchQuery);
        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
};

// Get details of a single book by ID
export const getOneBook = async (req, res, next) => {
    try {
        const onebook = await LibraryModel.findById(req.params.id);
        res.status(200).json(onebook);
    } catch (error) {
        next(error);
    }
};

// Update a book's details by ID
export const updateBook = async (req, res, next) => {
    try {
        const update = await LibraryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(update);
    } catch (error) {
        next(error);
    }
};

// Delete a book by ID
export const deleteBook = async (req, res, next) => {
    try {
        const bookDelete = await LibraryModel.findByIdAndDelete(req.params.id);
        res.status(200).json(bookDelete);
    } catch (error) {
        next(error);
    }
};
