import Material from "./Material.js"

export default class Book extends Material {
    constructor(identifier, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed,gender) {
        super()
        this.identifier = identifier,
            this.title = title,
            this.yearOfPublication = yearOfPublication,
            this.yearOfArrival = yearOfArrival,
            this.editorial = editorial,
            this.amount = amount,
            this.borrowed = borrowed
            this.gender = gender     
    }

    calculate(){
        if(this.gender === "Child"){
            this.tax = (this.yearOfPublication + 1) / (this.yearOfArrival * 1.05)
        }
        else if(this.gender === "Fiction"){
            this.tax = (this.yearOfPublication + 1) / (this.yearOfArrival * 0.6)
        }
        else if(this.gender === "History"){
            this.tax = (this.yearOfPublication + 1) / (this.yearOfArrival * 1.2)
        }
    }
}
