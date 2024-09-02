
import { Router } from "express";
import { actualizarPaciente, listarPacientes, registrarPaciente } from "../controllers/paciente_controller.js";
const router=Router()

router.post('/paciente/registro',registrarPaciente)
router.get('/paciente/listar',listarPacientes)
router.put('/paciente/actualizar/:id',actualizarPaciente)

export default router;