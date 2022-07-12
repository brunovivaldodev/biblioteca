import Material from "./Material.js"

export default class Magazine extends Material {
    constructor(identifier, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed, publicationFrequency, author) {
        super()
        this.identifier = identifier,
            this.title = title,
            this.yearOfPublication = yearOfPublication,
            this.yearOfArrival = yearOfArrival,
            this.editorial = editorial,
            this.amount = amount,
            this.borrowed = borrowed,
            this.publicationFrequency = publicationFrequency,
            this.author = author


    }

    calculate() {
        if (this.publicationFrequency === "quarterly") {
            this.tax = (this.yearOfPublication + 1) / (this.yearOfArrival * 1.4)
        }
        else if (this.gender === "semiannual") {
            this.tax = (this.yearOfPublication + 1) / (this.yearOfArrival * 1.33)
        }
        else if (this.gender === "annual") {
            this.tax = (this.yearOfPublication + 1) / (this.yearOfArrival * 1.15)
        }
    }
}
