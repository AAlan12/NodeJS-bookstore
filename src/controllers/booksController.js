import books from "../models/Book.js";

class BookController{
    static listBooks = (req,res) => {
        books.find()
        .populate('author')
        .exec((err,books) => {
            res.status(200).json(books)
        })
    }
    static listBookById = (req,res) =>{
        const id = req.params.id;

        books.findById(id)
        .populate('author', 'name') 
        .exec((err, books) => {
            if(err){
                res.status(400).send({message: `${err.message} - book id not found`})
            }else{
                res.status(200).send(books)
            }
        })
    }
    static registerBook = (req,res) => {
        let book = new books(req.body);

        book.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - failed to register book`})
            }else{
                res.status(201).send(book.toJSON())
            }
        })
    }
    static updatingBook = (req,res) => {
        const id = req.params.id;

        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'book successfully updated'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
    static removeBook = (req,res) => {
        const id = req.params.id;

        books.findOneAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: "book successfully removed"})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default BookController