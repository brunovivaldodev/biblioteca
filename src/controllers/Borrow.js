
import { UserDAO } from "../daos/User.js"
import { MaterialDAO } from "../daos/Material.js"
import BorrowDAO from "../daos/Borrow.js"


export default class BorroWController {

    create(bi, identifier) {
        try {
            const userExists = UserDAO.index().find(users => users.bi === bi)
            const bookExists = MaterialDAO.findBooks().find(book => book.identifier == identifier)

            if (userExists && bookExists) {
                bookExists.amount -= 1;
                bookExists.borrowed += 1;

                const borrow = {
                    user: userExists,
                    borrow: bookExists
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



        const users = UserDAO.index()
        const materials = MaterialDAO.findBooks()

        return { users, materials }

    }


    listUsersAndBooks() {

        const users = UserDAO.index()
        const materials = MaterialDAO.findBooks()


        return { users, materials }
    }

}