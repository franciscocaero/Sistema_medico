import mongoose, {Schema,model} from 'mongoose'

const especialidadesSchema=new Schema({
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    codigo:{
        type:String,
        require:true,
        trim:true
    },
    descripcion:{
        type:String,
        require:true,
        trim:true
    }
   


})

export default model('Especialidades',especialidadesSchema)