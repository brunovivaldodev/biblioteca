import MaterialDAO from "../daos/Material.js"

export default class MagazineController {
    create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author) {

        const magazine = MaterialDAO.storeMagazine(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author)

        return magazine
    }

    index() {
        const books = MaterialDAO.findMagazines()
        return books
    }

    delete(id) {
        const minutes = MaterialDAO.deleteMagazine(id)
        return minutes
    }

    update(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author) {

        const minute = MaterialDAO.updateMagazine(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author)

        return minute;

    }

    findMagazine(id) {
        const minute = MaterialDAO.findMagazine(id)
        return minute
    }

}