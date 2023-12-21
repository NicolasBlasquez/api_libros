"use strict"

const express = require('express');
const booksRouter = express.Router();

const { Book } = require("../classes/book");
const { getBookById } = require("../functions");
const books = require('../../data');

booksRouter.get('/', (req, res, next) => {
    try { res.json(books); } catch (err) { next(err); }
});

booksRouter.get('/:id', (req, res, next) => {
    try {
        const selectedBook = getBookById(req.params.id);
        res.json(selectedBook);
    } catch (err) { next(err); }
});

booksRouter.post('/', (req, res, next) => {
    try {
        const newBook = new Book(req.body);
        res.status(201).json(newBook);
    } catch (err) { next(err); }
});

booksRouter.put('/:id', (req, res, next) => {
    try {
        res.json(Object.assign(getBookById(req.params.id), req.body));
    } catch (err) { next(err); }
});

booksRouter.delete('/:id', (req, res, next) => {
    try {
        const index = books.findIndex((book) => book._ID == req.params.id);
        if (index === -1) throw Object.assign(new Error('Book not found'), { status: 404 });
        res.json(books.splice(index, 1));
    } catch (err) { next(err); }
});

module.exports = booksRouter;