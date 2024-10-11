# Library Management Backend

This is the backend service for the Library Management Application. It provides a RESTful API to manage books, authors, and reviews. It handles CRUD operations, data validation, error handling, and database interactions using MongoDB.


## Table of Contents
1. [Project Setup](#project-setup)
2. [API Endpoints](#api-endpoints)
3. [Middleware and Validation](#middleware-and-validation)
4. [Error Handling](#error-handling)
5. [Testing](#testing)
6. [Troubleshooting](#troubleshooting)


## Project Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (v4.0 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/library-management-backend.git

### Project Directory
cd library-management-backend

### Install Dependencies
npm install

### Environment Variables
PORT=3002
MONGODB_URI=mongodb://localhost:27017/libraryDB
JWT_SECRET=your_jwt_secret

### Database Setup
mongod --dbpath /path/to/your/database/folder

### Running the Server
npm start
The server will be accessible at http://localhost:3002

### API Endpoints

### Books API
- **GET /api/library**: Retrieve all books
- **POST /api/library**: Add a new book
  - **Request Body**:
    ```json
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "genre": "Fiction",
      "publishedYear": 1925
    }
    ```
  - **Response**:
    ```json
    {
      "status": "success",
      "message": "Library created successfully",
      "data": { /* Book details */ }
    }
    ```

- **PUT /api/library/:id**: Update a book
- **DELETE /api/library/:id**: Delete a book

### Authors API
- **GET /api/authors**: Retrieve all authors
- **POST /api/authors**: Add a new author
- **PUT /api/authors/:id**: Update an author
- **DELETE /api/authors/:id**: Delete an author

### Reviews API
- **GET /api/reviews**: Retrieve all reviews
- **POST /api/reviews**: Add a new review
- **PUT /api/reviews/:id**: Update a review
- **DELETE /api/reviews/:id**: Delete a review


### Middleware and Validation

## Middleware and Validation

The backend uses the **Joi** library for input validation. Each model has its validation schema, and a middleware function (`validateRequest`) is used to validate incoming request bodies.

**Example: Library Validation Schema**

```javascript
const Joi = require('joi');
const librarySchema = Joi.object({
  title: Joi.string().min(3).required(),
  author: Joi.string().required(),
  genre: Joi.string().min(3).required(),
  publishedYear: Joi.number().integer().min(1000).max(9999).required(),
});


## Error Handling

The backend has a centralized error handling middleware that catches all API errors and returns a structured response:

```json
{
  "status": "error",
  "message": "Invalid input data",
  "details": [/* Specific validation errors */]
}


### Testing

Run the tests using the following command:

```bash
npm test

### Troubleshooting

- **MongoDB connection error**: Ensure MongoDB is running locally or check your `MONGODB_URI` in `.env`.


Overview

The Book Search endpoint allows users to search for books in the library database using various query parameters. Users can search by title, author, genre, or any combination of these parameters.

Search by title
GET /api/books?title=Lord of the Rings

Search by author
GET /api/books?author=Tolkien

Search by genre
GET /api/books?genre=Fiction

Combined search
GET /api/books?author=Tolkien&genre=Fantasy

Implementation Details

-  The search is case-insensitive
-  Partial matches are supported (e.g., searching for "Tol" will match "Tolkien")
- If no query parameters are provided, all books will be returned
- The search uses MongoDB's $regex operator for pattern matching

Error Handling
In case of an error, the API will return an appropriate HTTP status code along with an error message.


