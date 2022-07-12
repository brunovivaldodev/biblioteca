
import { UserDAO } from "../daos/User.js"
import { MaterialDAO } from "../daos/Material.js"
import BorrowDAO from "../daos/Borrow.js"


export default class BorroWController {

    create(bi, identifier, amount) {
        try {
            const userExists = UserDAO.index().find(users => users.bi === bi)
            const bookExists = MaterialDAO.findBooks().find(book => book.identifier == identifier)

            if (userExists && bookExists) {

                const borrow = {
                    user: userExists,
                    borrow: bookExists,
                    amount: Number(amount)
                }

                const barrow = BorrowDAO.create(borrow)
                return barrow

            }


        }
        catch (error) {
            console.log(error)
        }
    }

    index() {
        return BorrowDAO.index()
    }


    listUsersAndBooks() {

        const users = UserDAO.index()
        const materials = MaterialDAO.findBooks()


        return { users, materials }
    }

}