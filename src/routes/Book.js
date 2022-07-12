import { Router } from "express";
import BookController from "../controllers/Book.js"

const routes = Router()
const bookController = new BookController()

routes.post("/create", (request, response) => {
    const { title, author, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender } = request.body
    bookController.create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author)
    response.redirect("/book/create")
})

routes.delete("/:id", bookController.delete)


routes.post("/delete", (req, res) => {
    const { id } = req.body


    const data = bookController.delete(id)

    res.render("create_book.html", { data })
})


routes.get("/editar/:id", (request, response) => {

    const { id } = request.params

    const item = bookController.findBook(id)

    response.render("edit_book.html", { item })


})


routes.post("/editar/:id", (request, response) => {

    const { title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author } = request.body
    const { id } = request.params

    const item = bookController.findBook(id)

    if (item) {

        bookController.update(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author);

    }
    response.redirect("/book/create")


})



routes.get("/create", (req, res) => {
    const data = bookController.index()
    res.render("create_book.html", { data })
})


export default routes