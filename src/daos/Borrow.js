import Borrow from "../models/Borrow.js";

import UserDAO from "../daos/User.js"
import MaterialDAO from "../daos/Material.js"

let borrows = []
export default class BorrowDAO {
    static count = 0;
    static create(bi, identifier, amount) {


        const userExists = UserDAO.index().find(users => users.bi === bi)
        const bookExists = MaterialDAO.findBooks().find(book => book.identifier == identifier)

        if (userExists && bookExists) {

            const createdBorrow = {
                user: userExists,
                borrow: bookExists,
                amount: Number(amount)
            }

            borrows.push(new Borrow(this.count + 1, createdBorrow.user, createdBorrow.borrow, createdBorrow.amount))

            this.count++

            return createdBorrow
        }

        return null;
    }


    static findBorrow(id) {
        const borrowExists = borrows.find(borrow => borrow.identifier == id)
        if (!borrowExists) {
            return undefined
        }
        return borrowExists
    }



    static update(id, bi, identifier, amount) {


        let borrowExists = this.index().find(borrow => borrow.identifier == id)

        if (borrowExists) {


            const userExists = UserDAO.index().find(users => users.bi === bi)
            const bookExists = MaterialDAO.findBooks().find(book => book.identifier == identifier)


            if (userExists && bookExists) {


                const createdBorrow = {
                    user: userExists,
                    borrow: bookExists,
                    amount: Number(amount)
                }

                borrows.push(new Borrow(id, createdBorrow.user, createdBorrow.borrow, createdBorrow.amount)) // alterar com o update na queries


                return borrowExists
            }
        }
        return borrowExists
    }

    static delete(id) {


        const newArray = borrows.filter(borrow => borrow.identifier != id)
        borrows = newArray

        return borrows
    }



    static index() {
        return borrows
    }
}