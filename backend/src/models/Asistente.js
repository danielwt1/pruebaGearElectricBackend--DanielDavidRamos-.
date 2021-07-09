const {Schema,model}=require('mongoose');
const asistenteSchema=new Schema({
    nombreApellido:{
        type:String,
        max:100,
        trim:true
    },
    
    TipoDoc:String,
    numeroDoc:{
        type:String,
        max:30,
        unique:true
    },
    celular:{

        type:Number
    },
    email:String,
    
},{
    timestamps:true
});
module.exports=model('Asistente',asistenteSchema);