import UserDAO from "../daos/User.js"


export default class UserController {

    create(name, bi, address) {

        const user = UserDAO.create(name, bi, address)

        return user
    }

    index() {

        return UserDAO.index()

    }


    delete(id) {
        const minutes = UserDAO.delete(id)
        return minutes
    }
}
