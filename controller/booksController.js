// server/controllers/bookController.js
const Book = require('../models/bookModel');


const createBook = async (req, res) => {
    
        const { title, description } = req.body;
        const file = req.file? req.file.path : null;
        try {
        const newBook = await Book.create({
            title,
            description,
            file,
        });

        res.status(201).json({ message: 'Book added successfully!', book: newBook });
    } catch (error) {
        console.error('Error adding book:', error);
        res.status(500).json({ message: 'Failed to add book.', error });
    }
};

// Controller function to fetch all books
const getBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);  // Return all books
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ message: 'Failed to fetch books.' });
    }
};

const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const filePath = req.file ? req.file.path : null; // Use req.file.path to get the full path

        const book = await Book.findByPk(id);

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        const updatedBook = await book.update({
            title: title || book.title,
            description: description || book.description,
            file: filePath || book.file, // Save the full path
        });

        res.status(200).json({
            message: 'Book updated successfully!',
            book: updatedBook,
        });
    } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).json({ message: 'Failed to update book.', error });
    }
};




module.exports = {
    createBook,
    getBooks,
    updateBook,
};
