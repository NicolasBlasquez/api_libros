"use strict"

const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3000;

const booksRouter = require('./app/routes/books');
const errorHandler = require('./app/middlewares/errorHandler');

app.use('/books', booksRouter);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server deployed on port ${PORT}`);
});