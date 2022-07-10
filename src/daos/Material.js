import Book from "../models/Book.js"
import Magazine from "../models/Magazine.js"
import Minutes from "../models/Minutes.js"

let materials = [
    new Book(1, "Codigo Limpo", "2022-03", "2011-04", 12, 16, 34, "Child"),
    new Book(2, "Arquitectura Limpa", "2022-03", "2011-04", 12, 16, 34, "Child")
]

export default class MaterialDAO {
    static count = 2;

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

    static findMagazine(id) {
        const magazineExists = materials.find(magazine => magazine.identifier == id)
        if (!magazineExists) {
            return undefined
        }
        return magazineExists
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

    static updateMagazine(identifier, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency) {

        const magazineExists = this.findMagazines().find(book => book.identifier == identifier)

        if (magazineExists) {
            magazineExists.amount = amount;
            magazineExists.borrowed = borrowed
            magazineExists.editorial = editorial
            magazineExists.publicationFrequency = publicationFrequency
            magazineExists.title = title
            magazineExists.yearOfArrival = yearOfArrival
            magazineExists.yearOfPublication = yearOfPublication
        }

        return magazineExists
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
        const minutes = materials.filter(minute => minute instanceof Minutes)

        return minutes
    }

    static updateMinute(identifier, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName) {

        const minuteExists = this.findMinutes().find(minute => minute.identifier == identifier)

        if (minuteExists) {

            minuteExists.amount = amount;
            minuteExists.borrowed = borrowed
            minuteExists.editorial = editorial
            minuteExists.congressName = congressName
            minuteExists.title = title
            minuteExists.yearOfArrival = yearOfArrival
            minuteExists.yearOfPublication = yearOfPublication
        }

        return minuteExists
    }

    static findMinute(id) {
        const minuteExists = materials.find(minute => minute.identifier == id)
        if (!minuteExists) {
            return undefined
        }
        return minuteExists
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