require("dotenv").config();
import { Router } from "express"; // uso el middleware express para poder usar los json que llegan por body
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
import dog from "./dog";
import temp from "./temp";


router.use("/dog", dog);
router.use("/temperament", temp)

export default router;
