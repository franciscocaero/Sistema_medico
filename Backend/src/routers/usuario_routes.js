import { Router } from "express";
import { confirmarEmail, login, registroUsuario } from "../controllers/usuario_controlador.js";

const router=Router();
router.post('/usuario/registro',registroUsuario)
router.post('/usuario/login',login)
router.get('confirmar/:token',confirmarEmail)
export default router