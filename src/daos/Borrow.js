
let borrows = []
export default class BorrowDAO {
    static create(borrow) {

        borrows.push(borrow)

        return borrows
    }
    static index() {
        return borrows
    }
}