import { Router } from "express"
import multer from "multer"
import multerConfig from "./config/upload.js"

import UserController from "./app/controllers/UserController.js"
import SessionController from "./app/controllers/SessionController.js"
import ProductController from "./app/controllers/ProductController.js"

const upload = multer(multerConfig)

const routes = new Router()

routes.post("/users", UserController.store)

routes.post("/session", SessionController.store)

routes.post("/products", upload.single("file"), ProductController.store)

export default routes

//  (req, res) => {
//     res.json({ message: "Upload realizado com sucesso" })
//   },
