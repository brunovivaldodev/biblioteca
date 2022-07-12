import MaterialDAO from "../daos/Material.js"

export default class MinutesController {
    create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName, author) {

        const minute = MaterialDAO.storeMinutes(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName, author)

        return minute
    }

    index() {
        const minutes = MaterialDAO.findMinutes()
        return minutes
    }

    delete(id) {
        const minutes = MaterialDAO.deleteMinute(id)
        return minutes
    }


    update(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName, author) {

        const minute = MaterialDAO.updateMinute(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName, author)

        return minute;

    }

    findMinute(id) {
        const minute = MaterialDAO.findMinute(id)
        return minute
    }

}