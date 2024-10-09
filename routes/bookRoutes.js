const express = require('express');
const bookRoutes = express.Router();
const { createBook, updateBook, getBooks} = require('../controller/booksController.js');
const upload = require('../dbconfig/multerConfig.js')

// Fixed route definitions:

bookRoutes.post('/create', upload, createBook); 
bookRoutes.put('/update/:id', upload, updateBook);
bookRoutes.get('/findall', getBooks); 

module.exports = bookRoutes;
