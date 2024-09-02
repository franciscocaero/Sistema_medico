import mongoose from "mongoose";
import citas from "../models/citas.js";

const registrarCita=async(req,res)=>{
    const {codigo,descripcion}=req.body
    if (Object.values(req.body).includes(""))
        return res
          .status(404)
          .json({ msg: "Lo sentimos, debes llenar todos los campos" }); 
    const nuevaCita = new citas(req.body);
    await nuevaCita.save()
    res
    .status(200)
    .json({ msg: "Se acaba de registrar una nueva cita en el sistema " });

}
export{
    registrarCita
}