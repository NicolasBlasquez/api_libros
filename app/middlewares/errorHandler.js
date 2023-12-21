"use strict"

const errorHandler = (error, req, res, next) => {
    const status = error.status || 500
    const message = `${status}: ${error.message}`;
    console.error(error);
    res.status(status).json({ error: message });
};

module.exports = errorHandler