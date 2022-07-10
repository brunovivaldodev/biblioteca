import Book from "../models/Book.js"
import Magazine from "../models/Magazine.js"
import Minutes from "../models/Minutes.js"

let materials = [
    new Book(1, "Codigo Limpo", "2022-03", "2011-04", 12, 16, 34, "Child"),
    new Book(2, "Arquitectura Limpa", "2022-03", "2011-04", 12, 16, 34, "Child")
]

export default class MaterialDAO {
    static count = 0;

    static storeBook(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender) {
        const book = new Book(this.count + 1, title, yearOfPublication, yearOfArrival, editorial, Number(amount), Number(borrowed), gender)
        materials.push(book)
        this.count++
        return book
    }

    static findBooks() {
        const bookExists = materials.filter(book => book instanceof Book)

        if (!bookExists) {
            return undefined
        }

        return bookExists
    }

    static deleteBook(id) {

        const newArray = materials.filter(minute => minute.identifier != id)
        materials = newArray

        return MaterialDAO.findBooks()
    }

    static findBook(id) {
        const bookExists = materials.find(book => book.identifier == id)
        if (!bookExists) {
            return undefined
        }
        return bookExists
    }


    static updateBook(identifier, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender) {


        const bookExists = this.findBooks().find(book => book.identifier == identifier)

        if (bookExists) {
            bookExists.amount = amount;
            bookExists.borrowed = borrowed
            bookExists.editorial = editorial
            bookExists.gender = gender
            bookExists.title = title
            bookExists.yearOfArrival = yearOfArrival
            bookExists.yearOfPublication = yearOfPublication
        }
        return bookExists
    }

    static storeMagazine(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency) {
        const magazine = new Magazine(this.count + 1, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency)
        materials.push(magazine)
        this.count++
        return magazine
    }

    static findMagazines() {
        const magazines = materials.filter(book => book instanceof Magazine)

        return magazines
    }

    static deleteMagazine(id) {

        const newArray = materials.filter(minute => minute.identifier != id)
        materials = newArray

        return MaterialDAO.findMagazines()
    }


    static storeMinutes(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName) {
        const minutes = new Minutes(this.count + 1, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName)
        materials.push(minutes)
        this.count++
        return minutes
    }

    static findMinutes() {
        const minutes = materials.filter(book => book instanceof Minutes)

        return minutes
    }

    static deleteMinute(id) {

        const newArray = materials.filter(minute => minute.identifier != id)
        materials = newArray

        return MaterialDAO.findMinutes()
    }




    static index() {
        return materials
    }

}

export { materials, MaterialDAO }