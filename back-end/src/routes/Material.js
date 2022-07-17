import { Router } from "express";
import MaterialController from "../controllers/Material.js";

const routes = Router()
const materialController = new MaterialController()

routes.get("/", materialController.index)


export default routes