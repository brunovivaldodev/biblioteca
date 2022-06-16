import MaterialDAO from "../daos/Material.js"

export default class BookController {
    create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender) {

        const book = MaterialDAO.storeBook(title, yearOfPublication, yearOfArrival, editorial, Number(amount), Number(borrowed), gender)

        return book
    }

    update(request, response) {

        const { id } = request.params

        const { title } = request.body

        const bookExists = MaterialDAO.findBook(id)

        if (bookExists) {
            bookExists.title = title
        }


        response.status(200).json(bookExists)
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