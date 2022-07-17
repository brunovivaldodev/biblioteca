import { Router } from "express";
import MinutesController from "../controllers/Minutes.js"

const routes = Router()
const minutesController = new MinutesController()

routes.post("/create", async (request, response) => {
    const { title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName, author } = request.body
    await minutesController.create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName, author)
    response.send()
})

routes.delete("/delete/:id", async (req, res) => {
    const { id } = req.params

    const data = await minutesController.delete(id)

    res.json(data)
})


routes.get("/editar/:id", async (request, response) => {

    const { id } = request.params

    const item = await minutesController.findMinute(id)

    response.json(item)


})

routes.post("/editar/:id", async (request, response) => {

    const { title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName, author } = request.body
    const { id } = request.params

    const item = await minutesController.findMinute(id)

    if (item) {

        await minutesController.update(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName, author);

    }

    response.send()

})

routes.get("/create", async (req, res) => {
    const data = await minutesController.index()

    res.json(data)

})


export default routes