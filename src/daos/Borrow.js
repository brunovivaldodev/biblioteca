import Borrow from "../models/Borrow.js";

let borrows = []
export default class BorrowDAO {
    static count = 0;
    static create(borrow) {

        const createdBorrow = new Borrow(this.count + 1, borrow.user, borrow.borrow, borrow.amount)

        borrows.push(createdBorrow)
        this.count++

        return createdBorrow
    }
    static index() {
        return borrows
    }
}