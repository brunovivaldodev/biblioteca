import axios from "../config/axios.js"

export default class MagazineAPI {
    async create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author) {

        const { data } = await axios.post("/magazine/create", { title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author })

        return data
    }

    async index() {
        const { data } = await axios.get("/magazine/create")

        return data
    }

    async delete(id) {
        const { data } = await axios.delete(`magazine/delete/${id}`)
        return data
    }

    async update(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author) {

        const { data } = await axios.put(`magazine/editar/${id}`, { id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author })

        return data

    }

    async findMagazine(id) {
        const { data } = await axios.get(`magazine/editar/${id}`)

        return data
    }

}