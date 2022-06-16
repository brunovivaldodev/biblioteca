import MaterialDAO from "../daos/Material.js"

export default class MaterialController {
    index(request, response) {

        const materials = MaterialDAO.index()

        response.status(200).json(materials)
    }
}