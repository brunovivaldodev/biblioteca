import { Router } from "express";
import MagazineAPI from "../api/Magazine.js"

const routes = Router()
const magazineAPI = new MagazineAPI()

routes.post("/create", async (request, response) => {
    const { title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author } = request.body
    await magazineAPI.create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author)
    response.redirect("/magazine/create")
})


routes.post("/delete", async (req, res) => {
    const { id } = req.body
    const data = await magazineAPI.delete(id)

    res.render("create_magazine.html", { data })
})


routes.get("/editar/:id", async (request, response) => {

    const { id } = request.params

    const item = await magazineAPI.findMagazine(id)

    response.render("edit_magazine.html", { item })


})


routes.post("/editar/:id", async (request, response) => {

    const { title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author } = request.body
    const { id } = request.params

    const item = await magazineAPI.findMagazine(id)

    if (item) {

        magazineAPI.update(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author);

    }

    response.redirect("/magazine/create")

})



routes.get("/create", async (req, res) => {
    const data = await magazineAPI.index()
    res.render("create_magazine.html", { data })
})


export default routes