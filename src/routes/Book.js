import { Router } from "express";
import BookController from "../controllers/Book.js"

const routes = Router()
const bookController = new BookController()

routes.post("/create", (request, response) => {
    const { title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender } = request.body
    const t = bookController.create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender)
    response.redirect("/book/create")
})

routes.put("/:id", bookController.update)
routes.delete("/:id", bookController.delete)


routes.post("/delete", (req, res) => {
    const { id } = req.body

    console.log(req.body)


    const data = bookController.delete(id)

    res.render("create_book.html", { data })
})



routes.get("/create", (req, res) => {
    const data = bookController.index()
    res.render("create_book.html", { data })
})


export default routes