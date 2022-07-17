import axios from "../config/axios.js"

export default class BookAPI {
    async create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author) {
        const { data } = await axios.post("/book/create", { title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author })

        return data
    }

    async update(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author) {

        const { data } = await axios.put(`book/editar/${id}`, { id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author })

        return data
    }

    async findBook(id) {

        const { data } = await axios.get(`book/editar/${id}`)

        return data
    }

    async index() {

        const { data } = await axios.get("/book/create")

        return data
    }

    async delete(id) {

        const { data } = await axios.delete(`book/delete/${id}`)
        return data
    }



}