import db from "../config/pg.js"

export default class Material {

    static async storeBook(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author) {

        const book = await db.query("INSERT INTO material (title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author) VALUES($1, $2,$3, $4,$5, $6,$7, $8) RETURNING *", [title, yearOfPublication, yearOfArrival, editorial, Number(amount), Number(borrowed), gender, author])

        return book
    }

    static async findBooks() {

        const books = await db.query("select * from material where gender is not null")

        return books.rows
    }

    static async findBook(identifier) {

        const bookExists = await db.query("select * from material where identifier = $1 and gender is not null", [identifier])

        if (!bookExists) {
            return undefined
        }

        return bookExists.rows[0]
    }

    static async deleteBook(id) {

        await db.query("delete from material where identifier = $1", [id])

        return await this.findBooks()
    }

    static async updateBook(identifier, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author) {

        const bookExists = await db.query("select * from material where identifier = $1", [identifier])

        if (bookExists) {

            await db.query("update material set title = $2, yearofpublication = $3, yearofarrival = $4, editorial = $5, amount = $6, borrowed =$7, gender = $8, author = $9 where identifier = $1", [identifier, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, gender, author])

        }
        return await this.findBooks()
    }


    static async storeMagazine(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author) {
        const magazine = await db.query("INSERT INTO material(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author) VALUES($1, $2,$3, $4,$5, $6,$7, $8) RETURNING *", [title, yearOfPublication, yearOfArrival, editorial, Number(amount), Number(borrowed), publicationFrequency, author])

        return magazine
    }

    static async findMagazines() {
        const magazine = await db.query("select * from material where publicationFrequency is not null")

        return magazine.rows
    }

    static async findMagazine(id) {
        const magazineExists = await db.query("select * from material where identifier = $1 and publicationFrequency is not null", [id])

        if (!magazineExists) {
            return undefined
        }

        return magazineExists.rows[0]
    }

    static async deleteMagazine(id) {
        await db.query("delete from material where identifier = $1", [id])

        return await this.findMagazines()
    }


    static async updateMagazine(identifier, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author) {

        const magazineExists = await db.query("select * from material where identifier = $1", [identifier])

        if (magazineExists) {

            await db.query("update material set title = $2, yearofpublication = $3, yearofarrival = $4, editorial = $5, amount = $6, borrowed =$7, publicationFrequency = $8, author = $9 where identifier = $1", [identifier, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author])

        }
        return await this.findMagazines()
    }


    static async storeMinutes(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName, author) {
        const magazine = await db.query("INSERT INTO material(title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName, author) VALUES($1, $2,$3, $4,$5, $6,$7, $8) RETURNING *", [title, yearOfPublication, yearOfArrival, editorial, Number(amount), Number(borrowed), congressName, author])

        return magazine
    }

    static async findMinutes() {
        const books = await db.query("select * from material where congressName is not null")

        return books.rows
    }

    static async findMinute(id) {
        const minuteExists = await db.query("select * from material where identifier = $1 and congressName is not null", [id])

        if (!minuteExists) {
            return undefined
        }

        return minuteExists.rows[0]
    }

    static async deleteMinute(id) {

        await db.query("delete from material where identifier = $1", [id])

        return await this.findMinutes()
    }

    static async updateMinute(identifier, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName, author) {
        const bookExists = await db.query("select * from material where identifier = $1", [identifier])

        if (bookExists) {

            await db.query("update material set title = $2, yearofpublication = $3, yearofarrival = $4, editorial = $5, amount = $6, borrowed =$7, congressName = $8, author = $9 where identifier = $1", [identifier, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, congressName, author])

        }
        return await this.findBooks()
    }






}
