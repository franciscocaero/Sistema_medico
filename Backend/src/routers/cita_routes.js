import { Router } from "express";
import { registrarCita } from "../controllers/cita_controller.js";

const router=Router()
router.post('/citas/registro',registrarCita)
export default router