import { Router } from "express";
import UserAPI from "../api/User.js";

const routes = Router();

const userAPI = new UserAPI()

routes.post("/create", async (request, response) => {
    const { name, bi, address } = request.body
    userAPI.create(name, bi, address)
    response.redirect("/users/create")
})

routes.get("/create", async (req, res) => {
    const data = await userAPI.index()

    res.render("create_user.html", { data })
})

routes.get("/editar/:id", async (request, response) => {

    const { id } = request.params

    const item = await userAPI.findUser(id)

    response.render("edit_user.html", { item })


})


routes.post("/editar/:id", async (request, response) => {

    const { name, bi, address } = request.body
    const { id } = request.params

    const item = await userAPI.findUser(id)

    if (item) {

        await userAPI.update(id, name, bi, address);

    }
    response.redirect("/users/create")

})


routes.post("/delete", async (req, res) => {
    const { id } = req.body


    const data = await userAPI.delete(id)

    res.render("create_user.html", { data })
})





export default routes