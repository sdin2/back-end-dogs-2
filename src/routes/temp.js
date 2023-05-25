require("dotenv").config();
import { Router } from "express"; // uso el middleware express para poder usar los json que llegan por body
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
import { Temp } from "../db.js";

router.get('/', async (req, res) => {
    try{
        let typesTemp = await Temp.findAll({ 
            order: [
            ['name', 'ASC'],
        ],});
        // console.log(typesDiet);
        
        res.status(200).json(typesTemp);
    } catch (error) {
        console.error(error);
        return ([])
    }
})

// router.post("/",async(req,res)=>{
//     try{
//     let {temperament,id}=req.body
//     let temperamentDB= await Temp.findAll({
//         where: {name : temperament}
//       })
//       let tempCreate = await Temp.Create ({temperament,id})
//       tempCreate.addTemp(temperamentDB)
//     res.send("completado")
//     }
//     catch (error) {
//         console.error(error);
//         return ([])
//     }
// })


export default router;