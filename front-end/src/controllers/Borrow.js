import { Router } from "express";
import BorrowAPI from "../api/Borrow.js"

const routes = Router()
const borrowAPI = new BorrowAPI()

routes.post("/create", async (request, response) => {

    const { identifier, bi, amount } = request.body

    await borrowAPI.create(bi, identifier, amount)

    response.redirect("/borrow/create")


})
routes.get("/create", async (request, response) => {

    const { materials, users } = await borrowAPI.listUsersAndMagazines()

    const { borrows } = await borrowAPI.index()



    response.render("solicitar_revista.html", { users, materials, borrows })

})

routes.post("/borrowed/filter", async (request, response) => {

    const { cartao } = request.body

    const borrows = await borrowAPI.filter(cartao)

    response.render("lista_materias_emprestados.html", { borrows })

})


routes.get("/loan", async (request, response) => {

    const { borrows } = await borrowAPI.index()

    response.render("emprestar_material.html", { borrows })

})

routes.get("/loan-list", async (request, response) => {

    const borrows = await borrowAPI.borrowed()

    response.render("lista_materias_emprestados.html", { borrows })

})


routes.post("/loan/:id", async (request, response) => {

    const { id } = request.body

    await borrowAPI.loan(id)

    response.redirect("/borrow/loan")

})



routes.post("/delete", async (req, res) => {
    const { id } = req.body


    await borrowAPI.delete(id)

    const { materials, users } = await borrowAPI.listUsersAndMagazines()

    const borrows = await borrowAPI.index()

    res.render("solicitar_revista.html", { users, materials, borrows })
})




export default routes