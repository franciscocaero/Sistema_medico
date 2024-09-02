import mongoose from "mongoose";
import Paciente from "../models/pacientes.js";


const registrarPaciente=async(req,res)=>{
    const {nombre, apellido, fecha_nacimiento,genero,ciudad,direccion,telefono,email}=req.body
    if (Object.values(req.body).includes(""))
        return res
          .status(404)
          .json({ msg: "Lo sentimos, debes llenar todos los campos" }); 
    const verificarEmailBDD = await Paciente.findOne({ email });

    if (verificarEmailBDD)
        return res
        .status(400)
        .json({ msg: "Lo sentimos, el email ya se encuentra registrado" });    
    const nuevoPaciente = new Paciente(req.body);
    await nuevoPaciente.save()
    res
    .status(200)
    .json({ msg: "Paciente registrado" });

}
const listarPacientes = async (req,res)=>{
    if (req.pacienteBDD) {
        const pacientes = await Paciente.find(req.pacienteBDD.id).populate('nombre apellido email')
        res.status(200).json(pacientes)
    }
    else{
        const pacientes = await Paciente.find({estado:true}).populate('nombre apellido email')
        res.status(200).json(pacientes)
    }
}
const actualizarPaciente = async (req, res) => {
    const { id } = req.params;
  
    if (Object.values(req.body).includes(""))
      return res
        .status(400)
        .json({ msg: "Lo sentimos, debes llenar todos los campos" });
  
    if (!mongoose.Types.ObjectId.isValid(id))
      return res
        .status(404)
        .json({ msg: `Lo sentimos, no existe el paciente que buscó ${id}` });
  
    await Paciente.findByIdAndUpdate(req.params.id, req.body);
  
    res.status(200).json({ msg: "Actualización exitosa del paciente" });
}
export{
    registrarPaciente,
    listarPacientes,
    actualizarPaciente
}