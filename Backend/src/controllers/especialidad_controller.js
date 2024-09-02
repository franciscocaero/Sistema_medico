import especialidades from "../models/especialidades.js";
import mongoose from "mongoose";

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
const listarEspecialidades = async (req,res)=>{
    if (req.especialidadesBDD) {
        const especialidad = await especialidades.find(req.especialidadesBDD.id)
        res.status(200).json(especialidad)
    }
    else{
        const especialidad = await especialidades.find({estado:true})
        res.status(200).json(especialidad)
    }
}
const actualizarEspecialidad=async(req,res)=>{
    const { id } = req.params;
  
    if (Object.values(req.body).includes(""))
      return res
        .status(400)
        .json({ msg: "Lo sentimos, debes llenar todos los campos" });
  
    if (!mongoose.Types.ObjectId.isValid(id))
      return res
        .status(404)
        .json({ msg: `Lo sentimos, no se encontró la especialidad ${id} en el centro ` });
  
    await especialidades.findByIdAndUpdate(req.params.id, req.body);
  
    res.status(200).json({ msg: "Actualización exitosa de la especialidad" });
}
const eliminarEspecialidad = async(req,res)=>{
    const {id} = req.params
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`La especialidad no existe `})
    await especialidades.findByIdAndDelete(req.params.id)
    res.status(200).json({msg:"Se ha eliminado la especialidad de la base de datos "})
}


export {
    registrarEspecialidad,
    listarEspecialidades,
    actualizarEspecialidad,
    eliminarEspecialidad
}