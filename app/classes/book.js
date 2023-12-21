"use strict"

const books = require('../../data');

class Book {

    _ID = books.length + 1;

    constructor(bodyData) {

        this.title = bodyData.title && typeof bodyData.title === `string` ? bodyData.title : "newBook";
        this.author = bodyData.author && typeof bodyData.author === `string` ? bodyData.author : "anonymous";

        books.forEach((book) => {
            if (book.title == this.title && book.author == this.author) throw Object.assign(new Error('Book already exists'), { status: 401 });
        });

        books.push(this);

    }

}

module.exports = { Book }