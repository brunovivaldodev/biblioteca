import axios from "../config/axios.js"

export default class MinutesAPI {
    create(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName, author) {

        // const minute = MaterialDAO.storeMinutes(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName, author)

        return 0
    }

    index() {
        // const minutes = MaterialDAO.findMinutes()
        return 0
    }

    delete(id) {
        // const minutes = MaterialDAO.deleteMinute(id)
        return 0
    }


    update(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName, author) {

        // const minute = MaterialDAO.updateMinute(id, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName, author)

        return 0;

    }

    findMinute(id) {
        // const minute = MaterialDAO.findMinute(id)
        return 0
    }

}