import mongoose from "mongoose";


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
    .json({ msg: "Registro exitoso del paciente y correo enviado" });

}
