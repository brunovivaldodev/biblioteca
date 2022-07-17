import db from "../config/pg.js"

import User from "./User.js"
import Material from "./Material.js"

export default class Borrow {

    static async create(bi, identifier, amount) {


        const userExists = await User.findUserByBI(bi)
        const bookExists = await Material.findMagazine(identifier)

        if (userExists && bookExists) {

            const createdBorrow = await db.query("INSERT INTO borrow(user_id, material_id, amount) VALUES($1, $2,$3) RETURNING *", [userExists.identifier, bookExists.identifier, amount])

            return createdBorrow
        }

        return null;
    }


    static async findBorrow(id) {
        const borrowExists = await db.query("select * from borrow where identifier = $1", [id])

        if (!borrowExists) {
            return undefined
        }

        return borrowExists.rows[0]
    }

    static async loan(id) {
        const borrow = await this.findBorrow(id)

        const userExists = await User.findUser(borrow.user_id)
        const bookExists = await Material.findMagazine(borrow.material_id)

        if (userExists && bookExists && borrow.amount <= bookExists.amount) {


            await db.query("update material set amount = $2, borrowed = $3 where identifier = $1", [bookExists.identifier, bookExists.amount - borrow.amount, bookExists.borrowed + borrow.amount])

            const createLoan = await db.query("INSERT INTO loan(user_id, material_id, amount) VALUES($1, $2,$3) RETURNING *", [userExists.identifier, bookExists.identifier, borrow.amount])

            await this.delete(id)

            return createLoan.rows
        }


    }

    static async delete(id) {
        await db.query("delete from borrow where identifier = $1", [id])

        return await this.index()
    }



    static async update(id, bi, identifier, amount) {


        let borrowExists = await this.findBorrow(id)

        if (borrowExists) {

            const userExists = await User.findUserByBI(bi)
            const bookExists = await Material.findBook(identifier)

            if (userExists && bookExists) {

                await db.query("update borrow set user_id = $2, material_id = $3 amount = $4 where identifier = $1", [identifier, userExists.identifier, bookExists.identifier, amount])

                return await this.index()
            }
        }

    }

    static async filter(cartao) {
        const borrowed = await db.query("select loan.identifier, users.name, users.bi, users.address, material.author, material.identifier as material_id, material.title, loan.amount from loan inner join users on loan.user_id = users.identifier inner join material on loan.material_id = material.identifier where users.bi = $1", [cartao])

        return borrowed.rows
    }


    static async borrowed() {
        const borrowed = await db.query("select loan.identifier, users.name, users.bi, users.address, material.author, material.identifier as material_id, material.title, loan.amount from loan inner join users on loan.user_id = users.identifier inner join material on loan.material_id = material.identifier")

        return borrowed.rows
    }



    static async index() {
        const borrows = await db.query("select borrow.identifier, users.name,users.bi, users.address, material.identifier as material_id, material.title, borrow.amount from borrow inner join users on borrow.user_id = users.identifier inner join material on borrow.material_id = material.identifier")

        return borrows.rows
    }
}