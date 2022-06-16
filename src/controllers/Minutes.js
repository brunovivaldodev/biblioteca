import MaterialDAO from "../daos/Material.js"

export default class MinutesController {
    create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName) {

        const minute = MaterialDAO.storeMinutes(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName)

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

}