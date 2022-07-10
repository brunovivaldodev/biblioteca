import UserDAO from "../daos/User.js"


export default class UserController {

    create(name, bi, address) {

        const user = UserDAO.create(name, bi, address)

        return user
    }

    index() {

        return UserDAO.index()

    }


    update(id, name, bi, address) {

        const user = UserDAO.updateUser(id, name, bi, address)

        return user;

    }


    findUser(id) {
        const user = UserDAO.findUser(id)
        return user
    }


    delete(id) {
        const minutes = UserDAO.delete(id)
        return minutes
    }
}
