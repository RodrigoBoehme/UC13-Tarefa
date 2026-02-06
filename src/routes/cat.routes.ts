import { Router } from "express";
import { CatControllerAsync } from "../controller/cat.controller";

const router= Router()

router.get("/Gato",CatControllerAsync.listar)
router.get("/Gato/:id",CatControllerAsync.buscar)
router.post("/Gato",CatControllerAsync.criar)

export default router