import MaterialDAO from "../daos/Material.js"

export default class BookController {
    create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender) {

        const book = MaterialDAO.storeBook(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender)

        return book
    }

    update(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender) {

        const book = MaterialDAO.updateBook(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender)

        return book;

    }

    findBook(id) {
        const book = MaterialDAO.findBook(id)
        return book
    }

    index() {
        const books = MaterialDAO.findBooks()
        return books
    }

    delete(id) {
        const minutes = MaterialDAO.deleteBook(id)
        return minutes
    }



}