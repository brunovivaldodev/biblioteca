import { Router } from "express";
import BookAPI from "../api/Book.js"

const routes = Router()
const bookAPI = new BookAPI()

routes.post("/create", async (request, response) => {
    const { title, author, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender } = request.body

    await bookAPI.create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author)

    response.redirect("/book/create")
})

routes.post("/delete", async (req, res) => {
    const { id } = req.body

    const data = await bookAPI.delete(id)
    res.render("create_book.html", { data })

})


routes.get("/editar/:id", async (request, response) => {

    const { id } = request.params

    const item = await bookAPI.findBook(id)

    response.render("edit_book.html", { item })


})


routes.post("/editar/:id", (request, response) => {

    const { title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author } = request.body
    const { id } = request.params

    const item = bookAPI.findBook(id)

    if (item) {

        bookAPI.update(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author);

    }
    response.redirect("/book/create")


})

routes.get("/create", async (req, res) => {
    const data = await bookAPI.index()

    res.render("create_book.html", { data })
})


export default routes