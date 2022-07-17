import express from "express"
import nunjucks from "nunjucks"
import { dirname } from "path"
import { fileURLToPath } from "url";
import routes from "./controllers/index.js"

const app = express();
app.use(express.urlencoded())
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(routes)
app.use(express.static(__dirname + "/public"))

nunjucks.configure(`${__dirname + "/public"}`, {
    autoescape: true,
    express: app,
})

app.get("/", (req, res) => {
    res.render("hello.html")
})

app.listen(3000, () => {
    console.log("server-frontend is running at port 3000")
})
