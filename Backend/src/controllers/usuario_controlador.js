import usuarios from "../models/usuarios.js";
import crearJWT from "../helpers/nuevoJWT.js";
import { sendMailToUser } from "../config/nodemailer.js";

const login=async(req,res)=>{
    const { email, password } = req.body;

    if (Object.values(req.body).includes(""))
      return res
        .status(404)
        .json({ msg: "Lo sentimos, debes llenar todos los campos" });
  
    const usuarioBDD = await Veterinario.findOne({ email });
  
    if (usuarioBDD?.confirmEmail === false)
      return res
        .status(403)
        .json({ msg: "Lo sentimos, debe verificar su cuenta" });
  
    if (!usuarioBDD)
      return res
        .status(404)
        .json({ msg: "Lo sentimos, el usuario no se encuentra registrado" });
  
    const verificarPassword = await usuarioBDD.matchPassword(password);
    if (!verificarPassword)
      return res
        .status(404)
        .json({ msg: "Lo sentimos, el password no es el correcto" });
  
    const token = generarJWT(usuarioBDD._id, "usuario");
    const { nombre, apellido, direccion, telefono, _id } = usuarioBDD;
  
    res.status(200).json({
      token,
      nombre,
      apellido,
      _id,
      email: usuarioBDD.email
    });
    console.log(nombre, apellido,  _id);
}

const registroUsuario=async(req,res)=>{
    const {nombre, apellido, email,password}=req.body;
    const nuevoUsuario = new usuarios(req.body);
    nuevoUsuario.password = await nuevoUsuario.encrypPassword(password);
    const token = nuevoUsuario.crearToken();
    await sendMailToUser(email, token);
    await nuevoUsuario.save();
    res
      .status(200)
      .json({ msg: "Revisa tu correo electrónico para confirmar tu cuenta" });
}
const confirmarEmail=async(req,res)=>{
    if (!req.params.token)
        return res
          .status(400)
          .json({ msg: "Lo sentimos, no se puede validar la cuenta" });
      const usuarioBDD = await usuarios.findOne({ token: req.params.token });
      if (!usuarioBDD?.token)
        return res.status(404).json({ msg: "La cuenta ya ha sido confirmada" });
      usuarioBDD.token = null;
      usuarioBDD.confirmEmail = true;
      await usuarioBDD.save();
      res.status(200).json({ msg: "Token confirmado, ya puedes iniciar sesión" });
}
export{
    registroUsuario,
    login,
    confirmarEmail
}
