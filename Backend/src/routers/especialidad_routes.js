import { Router } from "express";
import { actualizarEspecialidad, eliminarEspecialidad, listarEspecialidades, registrarEspecialidad } from "../controllers/especialidad_controller.js";

const router=Router()

router.post('/especialidad/registro',registrarEspecialidad)
router.get('/especialidad/listar',listarEspecialidades)
router.put('/especialidad/actualizar/:id',actualizarEspecialidad)
router.delete('/especialidad/eliminar/:id',eliminarEspecialidad)

export default router