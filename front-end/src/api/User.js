import axios from "../config/axios.js"


export default class UserAPI {

    async create(name, bi, address) {

        const { data } = await axios.post("/users/create", { name, bi, address })

        return data
    }

    async index() {
        const { data } = await axios.get("/users/create")

        return data

    }

    async update(id, name, bi, address) {

        const { data } = await axios.put(`/users/editar/${id}`, { id, name, bi, address })

        return data

    }


    async findUser(id) {
        const { data } = await axios.get(`/users/editar/${id}`)

        return data
    }


    async delete(id) {
        const { data } = await axios.delete(`/users/delete/${id}`)
        return data
    }
}
