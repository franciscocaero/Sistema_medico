import especialidades from "../models/especialidades.js";

const registrarEspecialidad=async(req,res)=>{
    const {codigo,nombre,descripcion}=req.body
    if (Object.values(req.body).includes(""))
        return res
          .status(404)
          .json({ msg: "Lo sentimos, debes llenar todos los campos" }); 
    const nuevaEspecialidad = new especialidades(req.body);
    await nuevaEspecialidad.save()
    res
    .status(200)
    .json({ msg: "Se acaba de registrar una especialidad en el sistema " });

}

export {
    registrarEspecialidad
}