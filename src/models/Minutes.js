import Material from "./Material.js"

export default class Minutes extends Material {
    constructor(identifier, title, yearOfPublication, yearOfArrival, editorial, amount, borrowed,congressName) {
        super()
        this.identifier = identifier,
            this.title = title,
            this.yearOfPublication = yearOfPublication,
            this.yearOfArrival = yearOfArrival,
            this.editorial = editorial,
            this.amount = amount,
            this.borrowed = borrowed
            this.congressName = congressName
    }

    calculate(){
            this.tax = (this.yearOfPublication + 1) / this.yearOfArrival
        
}
}

