import db from "../config/pg.js"

export default class User {

    static async create(name, bi, address) {

        const user = await db.query("INSERT INTO users (name, bi, address) VALUES($1, $2, $3) RETURNING *", [name, bi, address])

        return user

    }

    static async index() {
        const users = await db.query("select * from users")

        return users.rows
    }

    static async findUserByBI(bi) {
        const userExists = await db.query("select * from users where bi = $1", [bi])

        if (!userExists) {
            return undefined
        }

        return userExists.rows[0]
    }

    static async findUser(id) {
        const userExists = await db.query("select * from users where identifier = $1", [id])

        if (!userExists) {
            return undefined
        }

        return userExists.rows[0]
    }

    static async updateUser(identifier, name, bi, address) {

        const userExists = await db.query("select * from users where identifier = $1", [identifier])

        if (userExists) {

            await db.query("update users set name = $2, bi = $3, address = $4 where identifier = $1", [identifier, name, bi, address])

        }
        return await this.index()
    }


    static async delete(id) {

        await db.query("delete from users where bi = $1", [id])

        return await this.index()
    }

}