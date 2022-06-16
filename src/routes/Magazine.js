import { Router } from "express";
import MagazineController from "../controllers/Magazine.js"

const routes = Router()
const magazineController = new MagazineController()

routes.post("/create", (request, response) => {
    const { title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency } = request.body
    const t = magazineController.create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency)
    response.redirect("/magazine/create")
})

// routes.put("/:id", bookController.update)
// routes.delete("/:id", bookController.delete)

routes.post("/delete", (req, res) => {
    const { id } = req.body
    console.log(id)
    const data = magazineController.delete(id)

    res.render("create_magazine.html", { data })
})



routes.get("/create", (req, res) => {
    const data = magazineController.index()
    res.render("create_magazine.html", { data })
})


export default routes