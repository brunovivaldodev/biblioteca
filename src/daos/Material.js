import Book from "../models/Book.js"
import Magazine from "../models/Magazine.js"
import Minutes from "../models/Minutes.js"

let materials = []
export default class MaterialDAO {
    static count = 0;

    static storeBook(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender) {
        const book = new Book(this.count + 1, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender)
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


    static updateBook(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender) {

        const bookExists = materials.find(materials => materials.identifier === material.identifier && materials.title === material.title)

        materials.push(book)
        return book
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