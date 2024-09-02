import mongoose, {Schema,model} from 'mongoose'

const pacienteSchema=new Schema({
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    apellido:{
        type:String,
        require:true,
        trim:true
    },
    fecha_nacimiento:{
        type:Date,
        require:true,
        trim:true
    },
    genero:{
        type:String,
        require:true,
        trim:true
    },
    ciudad:{
        type:String,
        require:true,
        trim:true
    },
    direccion:{
        type:String,
        require:true,
        trim:true
    },
    telefono:{
        type:Number,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true
    }


})

export default model('Paciente',pacienteSchema)