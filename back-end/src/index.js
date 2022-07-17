import express from "express"
import "./config/pg.js"
import cors from "cors"
import routes from "./routes/index.js"

const app = express();
app.use(express.json())
app.use(cors())



app.use(routes)


app.listen(4000, () => {
    console.log("server-backend is running at port 4000")
})
