"use strict"

const books = require('../../data.js');

function getBookById(id) {
    const book = books.find((book) => book._ID == id);
    if (!book) throw Object.assign(new Error('Book not found'), { status: 404 });
    else return book;
}

module.exports = { getBookById }