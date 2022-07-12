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

    console.log("dsds", borrows)

    response.render("solicitar_livro.html", { users, materials, borrows })

})


routes.get("/loan", (request, response) => {

    const borrows = borrowController.index()

    response.render("emprestar_material.html", { borrows })

})

routes.post("/loan/:id", (request, response) => {

    const { id } = request.body


    const borrows = borrowController.loan(id)

    response.render("emprestar_material.html", { borrows })

})


routes.get("/editar/:id", (request, response) => {

    const { id } = request.params

    const borrow = borrowController.findBorrow(id)

    const { materials, users } = borrowController.listUsersAndBooks()
    response.render("edit_barrow.html", { users, materials, borrow })

})


routes.post("/editar/:id", (request, response) => {

    const { identifier, bi, amount } = request.body
    const { id } = request.params



    const item = borrowController.findBorrow(id)

    if (item) {

        borrowController.update(id, bi, identifier, amount);

    }
    response.redirect("/borrow/create")

})


routes.post("/delete", (req, res) => {
    const { id } = req.body



    borrowController.delete(id)

    const { materials, users } = borrowController.listUsersAndBooks()

    const borrows = borrowController.index()

    res.render("solicitar_livro.html", { users, materials, borrows })
})




export default routes