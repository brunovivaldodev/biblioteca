import { Router } from "express";
import MagazineController from "../controllers/Magazine.js"

const routes = Router()
const magazineController = new MagazineController()

routes.post("/create", (request, response) => {
    const { title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency } = request.body
    magazineController.create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency)
    response.redirect("/magazine/create")
})


routes.post("/delete", (req, res) => {
    const { id } = req.body
    const data = magazineController.delete(id)

    res.render("create_magazine.html", { data })
})


routes.get("/editar/:id", (request, response) => {

    const { id } = request.params

    const item = magazineController.findMagazine(id)

    response.render("edit_magazine.html", { item })


})


routes.post("/editar/:id", (request, response) => {

    const { title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency } = request.body
    const { id } = request.params

    const item = magazineController.findMagazine(id)

    if (item) {

        magazineController.update(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency);

    }

    response.redirect("/magazine/create")

})



routes.get("/create", (req, res) => {
    const data = magazineController.index()
    res.render("create_magazine.html", { data })
})


export default routes