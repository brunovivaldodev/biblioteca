import { Router } from "express";
import UserRoutes from "./User.js"
import BooKRoutes from "./Book.js"
import MagazineRoutes from "./Magazine.js"
import MinutesRoutes from "./Minutes.js"
import MaterialRoutes from "./Material.js"
import BorrowRoutes from "./Borrow.js"




const routes = Router()

routes.use("/users", UserRoutes)
routes.use("/book", BooKRoutes)
routes.use("/magazine", MagazineRoutes)
routes.use("/minutes", MinutesRoutes)
routes.use("/materials", MaterialRoutes)
routes.use("/borrow", BorrowRoutes)





export default routes