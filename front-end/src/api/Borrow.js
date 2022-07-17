import axios from "../config/axios.js"

import UserAPI from "../api/User.js";
import MagazineAPI from "../api/Magazine.js"

const magazineAPI = new MagazineAPI()

const userAPI = new UserAPI()

export default class BorrowAPI {

    async create(bi, identifier, amount) {

        const { data } = await axios.post("/borrow/create", { bi, identifier, amount })
        return data

    }

    async filter(cartao) {
        const { data } = await axios.get(`/borrow/borrowed/filter/${cartao}`)

        return data
    }


    async index() {
        const { data } = await axios.get("/borrow/create")

        return data
    }

    async loan(id) {
        const { data } = await axios.post(`borrow/loan/${id}`)

        return data
    }


    async borrowed() {

        const { data } = await axios.get("/borrow/loan-list")

        return data
    }


    async listUsersAndMagazines() {

        const users = await userAPI.index()
        const materials = await magazineAPI.index()


        return { users, materials }
    }


    async update(id, bi, identifier, amount) {

        const { data } = await axios.put(`borrow/editar/${id}`, { id, bi, identifier, amount })

        return data;

    }


    async delete(id) {
        const { data } = await axios.delete(`borrow/delete/${id}`)
        return data
    }

}