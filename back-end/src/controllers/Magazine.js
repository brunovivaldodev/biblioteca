import Material from "../models/Material.js"

export default class MagazineController {
    async create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author) {

        const magazine = await Material.storeMagazine(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author)

        return magazine
    }

    async findMagazines() {
        const books = await Material.findMagazines()
        return books
    }

    async delete(id) {
        const minutes = await Material.deleteMagazine(id)
        return minutes
    }

    async update(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author) {

        const minute = await Material.updateMagazine(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author)

        return minute;

    }

    async findMagazine(id) {
        const minute = await Material.findMagazine(id)
        return minute
    }

}