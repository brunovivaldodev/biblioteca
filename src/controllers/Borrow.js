
import { users as UserRepository } from "../daos/User.js"
import { MaterialDAO, materials } from "../daos/Material.js"
import BorrowDAO from "../daos/Borrow.js"


export default class BorroWController {

    create(bi, identifier) {
        try {
            const userExists = UserRepository.find(users => users.bi === bi)
            const materialExists = materials.find(materials => materials.identifier === identifier)


            if (userExists && materialExists) {
                materialExists.amount -= 1;
                materialExists.borrowed += 1;

                const borrow = {
                    user: userExists,
                    borrow: materialExists
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



        const users = UserRepository
        const materials = MaterialDAO.findBooks()

        return { users, materials }

    }


    listUsersAndBooks() {

        const users = UserRepository
        const materials = MaterialDAO.findBooks()


        return { users, materials }
    }

}