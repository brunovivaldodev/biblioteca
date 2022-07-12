
import { UserDAO } from "../daos/User.js"
import { MaterialDAO } from "../daos/Material.js"
import BorrowDAO from "../daos/Borrow.js"


export default class BorroWController {

    create(bi, identifier, amount) {

        const barrow = BorrowDAO.create(bi, identifier, amount)
        return barrow

    }


    index() {
        return BorrowDAO.index()
    }


    listUsersAndBooks() {

        const users = UserDAO.index()
        const materials = MaterialDAO.findBooks()


        return { users, materials }
    }


    update(id, bi, identifier, amount) {

        const borrow = BorrowDAO.update(id, bi, identifier, amount)

        return borrow;

    }


    findBorrow(id) {
        const borrow = BorrowDAO.findBorrow(id)
        return borrow
    }


    delete(id) {
        const borrow = BorrowDAO.delete(id)
        return borrow
    }

}