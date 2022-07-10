import { Router } from "express";
import MinutesController from "../controllers/Minutes.js"

const routes = Router()
const minutesController = new MinutesController()

routes.post("/create", (request, response) => {
    const { title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName } = request.body
    const t = minutesController.create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName)
    response.redirect("/minutes/create")
})

routes.post("/delete", (req, res) => {
    const { id } = req.body

    const data = minutesController.delete(id)

    res.render("create_acta.html", { data })
})


routes.get("/editar/:id", (request, response) => {

    const { id } = request.params

    const item = minutesController.findMinute(id)

    response.render("edit_acta.html", { item })


})

routes.post("/editar/:id", (request, response) => {

    const { title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName } = request.body
    const { id } = request.params

    const item = minutesController.findMinute(id)

    if (item) {

        minutesController.update(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName);

    }

    response.redirect("/minutes/create")

})

routes.get("/create", (req, res) => {
    const data = minutesController.index()

    res.render("create_acta.html", { data })

})


export default routes