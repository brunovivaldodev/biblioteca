import { Router } from "express";
import MagazineController from "../controllers/Magazine.js"

const routes = Router()
const magazineController = new MagazineController()

routes.post("/create", async (request, response) => {
    const { title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author } = request.body
    await magazineController.create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author)
    response.send()
})


routes.delete("/delete/:id", async (req, res) => {
    const { id } = req.params
    const data = await magazineController.delete(id)

    res.json(data)
})


routes.get("/editar/:id", async (request, response) => {

    const { id } = request.params

    const item = await magazineController.findMagazine(id)

    response.json(item)


})


routes.put("/editar/:id", async (request, response) => {

    const { title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author } = request.body
    const { id } = request.params

    const item = await magazineController.findMagazine(id)

    if (item) {

        await magazineController.update(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author);

    }

    response.send()

})


routes.get("/create", async (req, res) => {
    const data = await magazineController.findMagazines()
    res.json(data)
})


export default routes