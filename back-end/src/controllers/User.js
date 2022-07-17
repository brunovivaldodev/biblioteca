import User from "../models/User.js"


export default class UserController {

    async create(name, bi, address) {

        const user = await User.create(name, bi, address)

        return user

    }

    async index() {

        return await User.index()

    }


    async update(id, name, bi, address) {

        const user = await User.updateUser(id, name, bi, address)

        return user;

    }


    async findUser(id) {
        const user = await User.findUser(id)
        return user
    }


    async delete(id) {
        const minutes = await User.delete(id)
        return minutes
    }
}
