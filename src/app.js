// const express = require('express');
import  express  from "express";

const app = express();

const books = [
    {id: 1, "title": "Lord of the Rings"},
    {id: 2, "title": "The Witcher"}
]

app.get('/', (req,res) => {
    res.status(200).send('Node curse');
})
app.get('/books', (req,res) => {
    res.status(200).json(books)
})

export default app