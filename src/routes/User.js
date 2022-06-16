import { Router } from "express";
import UserController from "../controllers/User.js";

const routes = Router();

const userController = new UserController()

routes.post("/create", (request, response) => {
    const { name, bi, address } = request.body
    userController.create(name, bi, address)
    response.redirect("/users/create")
})

routes.get("/create", (req, res) => {
    const data = userController.index()

    res.render("create_user.html", { data })
})

routes.post("/delete", (req, res) => {
    const { id } = req.body


    const data = userController.delete(id)

    res.render("create_user.html", { data })
})





export default routes