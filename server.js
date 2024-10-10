const express = require('express');
const cors = require('cors');
const db=require('./dbconfig/dbconfig');
const bookRoutes = require('./routes/bookRoutes');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors()); 
app.use(express.json()); 
app.use('/uploads', express.static('uploads'));

app.use('/book', bookRoutes); 


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});