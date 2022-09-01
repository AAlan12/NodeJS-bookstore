// const express = require('express');
import  express  from "express";

const app = express();

app.use(express.json())

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
app.post('/books', (req, res) => {
    books.push(req.body);
    res.status(201).send('Book registered successfully')
})
app.put('/books/:id', (req,res) => {
    
    let i = bookSearch(req.params.id)
    books[i].title = req.body.title
    res.json(books)
})
app.get('/books/:id', (req,res) => {
    
    let i = bookSearch(req.params.id)
    res.json(books[i])
})
app.delete('/books/:id', (req,res) => {
    let {id} = req.params
    let i = bookSearch(id)
    books.splice(i, 1)
    res.send(`Book ${i+1} successfully removed`)
})


function bookSearch(id){
    return books.findIndex(book => book.id == id)
}


export default app