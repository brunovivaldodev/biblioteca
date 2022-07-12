
export default class Material {

    constructor(identifier, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, author) {
        this.identifier = identifier,
            this.title = title,
            this.author = author,
            this.yearOfPublication = yearOfPublication,
            this.yearOfArrival = yearOfArrival,
            this.editorial = editorial,
            this.amount = amount,
            this.borrowed = borrowed

        if (this.constructor == Material) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    calculate() {
        throw new Error("Method 'say()' must be implemented.");
    }


}

