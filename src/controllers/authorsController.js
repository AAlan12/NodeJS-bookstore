import authors from "../models/Author.js";

class AuthorController{
    static listAuthors = (req,res) => {
        authors.find((err,authors) => {
            res.status(200).json(authors)
        })
    }
    static listAuthorById = (req,res) =>{
        const id = req.params.id;

        authors.findById(id, (err, authors) => {
            if(err){
                res.status(400).send({message: `${err.message} - author id not found`})
            }else{
                res.status(200).send(authors)
            }
        })
    }
    static registerAuthor = (req,res) => {
        let author = new authors(req.body);

        author.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - failed to register author`})
            }else{
                res.status(201).send(author.toJSON())
            }
        })
    }
    static updatingAuthor = (req,res) => {
        const id = req.params.id;

        authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'author successfully updated'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
    static removeAuthor = (req,res) => {
        const id = req.params.id;

        authors.findOneAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: "author successfully removed"})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default AuthorController
