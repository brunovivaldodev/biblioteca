import { Router } from "express";
import BorrowController from "../controllers/Borrow.js"

const routes = Router()
const borrowController = new BorrowController()

routes.post("/create", (request, response) => {

    const { identifier, bi } = request.body

    borrowController.create(bi, identifier)

    const borrows = borrowController.index()


    const { materials, users } = borrowController.listUsersAndBooks()

    response.render("solicitar_livro.html", { users, materials, borrows })


})
routes.get("/create", (request, response) => {

    const { materials, users } = borrowController.listUsersAndBooks()

    const borrows = borrowController.index()

    response.render("solicitar_livro.html", { users, materials, borrows })

})



export default routes