import { Router } from "express";
import BookController from "../controllers/Book.js"

const routes = Router()
const bookController = new BookController()

routes.post("/create", async (request, response) => {
    const { title, author, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender } = request.body

    const data = await bookController.create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author)

    response.json(data)
})

routes.delete("/delete/:id", async (req, res) => {
    const { id } = req.params

    const data = await bookController.delete(id)

    res.json(data)
})


routes.get("/editar/:id", async (request, response) => {

    const { id } = request.params

    const item = await bookController.findBook(id)

    response.json(item)


})

routes.put("/editar/:id", async (request, response) => {

    const { title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author } = request.body
    const { id } = request.params

    const item = await bookController.findBook(id)

    if (item) {

        bookController.update(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author);

    }

    response.send()

})



routes.get("/create", async (req, res) => {
    const data = await bookController.index()
    res.json(data)
})


export default routes