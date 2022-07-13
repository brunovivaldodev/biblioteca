import User from "../models/User.js";

let users = [
    new User(1, "Bruno Vivaldo", "2334", "Luanda"),
    new User(2, "José Pedro", "1982", "Porto"),
    new User(3, "Ricardo Castro", "1234", "Benfica")
]
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