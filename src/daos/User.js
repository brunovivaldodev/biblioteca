import User from "../models/User.js";

let users = []
export default class UserDAO {

    static count = 0;

    static create(name, bi, address) {
        const user = new User(this.count + 1, name, bi, address);
        users.push(user)

        return user
    }

    static index() {
        return users
    }


    static findUser(id) {
        const userExists = users.find(user => user.identifier == id)
        if (!userExists) {
            return undefined
        }
        return userExists
    }

    static updateUser(identifier, name, bi, address) {


        const userExists = this.index().find(user => user.identifier == identifier)

        if (userExists) {
            userExists.name = name;
            userExists.bi = bi
            userExists.address = address

        }
        return userExists
    }


    static delete(id) {

        const newArray = users.filter(user => user.bi != id)
        users = newArray

        return users
    }

}

export { users }