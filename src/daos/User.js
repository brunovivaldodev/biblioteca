import User from "../models/User.js";

let users = []
export default class UserDAO {

    static create(name, bi, address) {
        const user = new User(name, bi, address);
        users.push(user)

        return user
    }

    static index() {
        return users
    }


    static delete(id) {

        const newArray = users.filter(user => user.bi != id)
        users = newArray

        return users
    }

}

export { users }