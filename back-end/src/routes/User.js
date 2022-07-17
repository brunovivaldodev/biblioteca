import { Router } from "express";
import UserController from "../controllers/User.js";

const routes = Router();

const userController = new UserController()

routes.post("/create", async (request, response) => {
    const { name, bi, address } = request.body
    const data = await userController.create(name, bi, address)

    response.json(data.rows)
})

routes.get("/create", async (req, res) => {
    const data = await userController.index()

    res.json(data)
})

routes.get("/editar/:id", async (request, response) => {

    const { id } = request.params

    const item = await userController.findUser(id)

    response.json(item)


})


routes.put("/editar/:id", async (request, response) => {

    const { name, bi, address } = request.body
    const { id } = request.params

    const item = await userController.findUser(id)

    if (item) {

        userController.update(id, name, bi, address);

    }
    response.send()

})


routes.delete("/delete/:id", async (req, res) => {
    const { id } = req.params

    const data = await userController.delete(id)

    res.json(data)
})





export default routes