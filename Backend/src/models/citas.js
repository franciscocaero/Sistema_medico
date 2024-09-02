import mongoose, {Schema,model} from 'mongoose'  

const citaSchema=new Schema({
    codigo:{
        type:Number,
        require:true,
        trim:true
    },
    descripcion:{
        type:Number,
        require:true,
        trim:true
    },
    paciente:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Paciente'
    },
    especialidades:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Especialidades'
    }
   


})

export default model('Cita',citaSchema)