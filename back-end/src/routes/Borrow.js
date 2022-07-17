import { Router } from "express";
import BorrowController from "../controllers/Borrow.js"

const routes = Router()
const borrowController = new BorrowController()

routes.post("/create", async (request, response) => {

    const { identifier, bi, amount } = request.body

    const data = await borrowController.create(bi, identifier, amount)

    response.json(data)


})
routes.get("/create", async (request, response) => {

    const { materials, users } = await borrowController.listUsersAndBooks()

    const borrows = await borrowController.index()

    response.json({ users, materials, borrows })

})


routes.get("/loan", async (request, response) => {

    const borrows = await borrowController.index()

    response.json(borrows)

})


routes.get("/borrowed/filter/:cartao", async (request, response) => {

    const { cartao } = request.params

    const borrows = await borrowController.filter(cartao)

    response.json(borrows)

})


routes.get("/loan-list", async (request, response) => {

    const borrows = await borrowController.borrowed()

    response.json(borrows)

})


routes.post("/loan/:id", async (request, response) => {

    const { id } = request.params

    const borrows = await borrowController.loan(id)

    response.json(borrows)

})


routes.get("/editar/:id", async (request, response) => {

    const { id } = request.params

    const borrow = await borrowController.findBorrow(id)

    const { materials, users } = await borrowController.listUsersAndBooks()
    response.json(users, materials, borrow)

})


routes.post("/editar/:id", async (request, response) => {

    const { identifier, bi, amount } = request.body
    const { id } = request.params



    const item = await borrowController.findBorrow(id)

    if (item) {

        borrowController.update(id, bi, identifier, amount);

    }
    response.send()

})


routes.delete("/delete/:id", async (req, res) => {
    const { id } = req.params

    await borrowController.delete(id)

    const { materials, users } = await borrowController.listUsersAndBooks()

    const borrows = await borrowController.index()

    res.json(users, materials, borrows)
})




export default routes