import Material from "../models/Material.js"

export default class MinutesController {
    async create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName, author) {

        const minute = await Material.storeMinutes(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName, author)

        return minute
    }

    async index() {
        const minutes = await Material.findMinutes()
        return minutes
    }

    async delete(id) {
        const minutes = await Material.deleteMinute(id)
        return minutes
    }


    async update(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName, author) {

        const minute = await Material.updateMinute(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName, author)

        return minute;

    }

    async findMinute(id) {
        const minute = await Material.findMinute(id)
        return minute
    }

}