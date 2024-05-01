import { extname } from "path"
import multer from "multer"
import { v4 } from "uuid"


export default multer({
    storage: multer.diskStorage({
        destination: (req, feli, cb) => {
            cb(null, './public/uploads')
        },
        filename: (req, file, cb) => {
            cb(null, v4() + extname(file.originalname))
        }
    })
})

