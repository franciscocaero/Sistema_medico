import { Router } from "express";
import { registrarEspecialidad } from "../controllers/especialidad_controller.js";

const router=Router()

router.post('/especialidad/registro',registrarEspecialidad)

export default router