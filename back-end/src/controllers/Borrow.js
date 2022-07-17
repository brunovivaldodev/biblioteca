
import User from "../models/User.js"
import Material from "../models/Material.js"
import Borrow from "../models/Borrow.js"


export default class BorroWController {

    async create(bi, identifier, amount) {

        const barrow = await Borrow.create(bi, identifier, amount)
        return barrow

    }


    async index() {
        return await Borrow.index()
    }

    async loan(id) {
        return await Borrow.loan(id)
    }

    async filter(cartao) {
        return await Borrow.filter(cartao)
    }


    async borrowed() {
        return await Borrow.borrowed()
    }


    async listUsersAndBooks() {

        const users = await User.index()
        const materials = await Material.findBooks()

        return { users, materials }
    }


    async update(id, bi, identifier, amount) {

        const borrow = Borrow.update(id, bi, identifier, amount)

        return borrow;
    }


    async findBorrow(id) {
        const borrow = await Borrow.findBorrow(id)
        return borrow
    }


    async delete(id) {
        const borrow = await Borrow.delete(id)
        return borrow
    }

}