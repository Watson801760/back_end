import  mongoose  from "mongoose";

const Schema = mongoose.Schema;

const GaticoSchema = new Schema ({
    nombre:{
        type: String,
        
    },
    raza:{
        type:String,
        
    },
    enfermedad:{
        type:String
    },
    antecedentes:{
        type:String
    },
    telefono_del_responsable:{
        type:Number
    },
    fecha_de_vacunacion:{
        type:Date,
        default: Date.now 
    }
})

export default  GaticoSchema