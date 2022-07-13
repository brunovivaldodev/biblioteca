import Borrow from "../models/Borrow.js";

import UserDAO from "../daos/User.js"
import MaterialDAO from "../daos/Material.js"
import Loan from "../models/Loan.js";

let borrows = []
let loans = []
export default class BorrowDAO {
    static count = 0;
    static countloans = 0;
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

    static loan(id) {
        const borrow = this.findBorrow(id)

        const userExists = UserDAO.index().find(users => users.bi === borrow.user.bi)
        const bookExists = MaterialDAO.findBooks().find(book => book.identifier == borrow.material.identifier)


        if (userExists && bookExists && borrow.amount <= bookExists.amount) {

            bookExists.amount -= borrow.amount;
            bookExists.borrowed += borrow.amount;

            const createLoan = {
                user: userExists,
                borrow: bookExists,
                amount: Number(borrow.amount)
            }

            loans.push(new Loan(this.countloans + 1, createLoan.user, createLoan.borrow, createLoan.amount))

            this.delete(id)

            this.countloans++

            return createLoan
        }


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

    static borrowed() {
        return loans
    }



    static index() {
        return borrows
    }
}