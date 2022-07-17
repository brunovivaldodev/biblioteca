import Material from "../models/Material.js"

export default class MaterialController {
    index(request, response) {

        const materials = Material.index()

        response.status(200).json(materials)
    }
}