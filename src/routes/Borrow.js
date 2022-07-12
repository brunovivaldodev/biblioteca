import { Router } from "express";
import BorrowController from "../controllers/Borrow.js"

const routes = Router()
const borrowController = new BorrowController()

routes.post("/create", (request, response) => {

    const { identifier, bi, amount } = request.body



    borrowController.create(bi, identifier, amount)


    response.redirect("/borrow/create")


})
routes.get("/create", (request, response) => {

    const { materials, users } = borrowController.listUsersAndBooks()

    const borrows = borrowController.index()

    response.render("solicitar_livro.html", { users, materials, borrows })

})



export default routes