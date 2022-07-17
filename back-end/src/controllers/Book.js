import Material from "../models/Material.js"

export default class BookController {
    async create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author) {

        const book = await Material.storeBook(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author)

        return book
    }

    async update(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author) {

        const book = await Material.updateBook(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author)

        return book;

    }

    async findBook(id) {
        const book = await Material.findBook(id)
        return book
    }

    async index() {
        const books = await Material.findBooks()
        return books
    }

    delete(id) {
        const minutes = Material.deleteBook(id)
        return minutes
    }



}