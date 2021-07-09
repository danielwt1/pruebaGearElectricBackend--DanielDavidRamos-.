const asistentesCtrl={};
const Asistente =require('../models/Asistente');

asistentesCtrl.getAsistentes=async (req,res)=>{
    const asistentes= await Asistente.find();
    res.json(asistentes);
}
asistentesCtrl.AñadirAsistentes= async (req,res)=>{
    //REQ.BODY PARA TENER EL OBJETO
    const{nombreApellido,TipoDoc,numeroDoc,celular,email}=req.body;
    const newAsistente =new Asistente({
        nombreApellido,
        TipoDoc,
        numeroDoc,
        celular,
        email,
    });
    await newAsistente.save();

    //res.json('asistente guardado');
}

asistentesCtrl.editarAsistentes=async (req,res)=>{
    const{nombreApellido,TipoDoc,numeroDoc,celular,email}=req.body;
    
    await Asistente.findByIdAndUpdate(req.params.id,{
        nombreApellido,
        TipoDoc,
        numeroDoc,
        celular,
        email,
    });
    //res.json('asistente actualizado');
}
asistentesCtrl.deleteAsistente=async (req,res)=>{
    await Asistente.findByIdAndDelete(req.params.id);
    res.json('asistente eliminado');
}
asistentesCtrl.getAsistente=async (req,res)=>{
    const asistente =await Asistente.findById(req.params.id);
    //res.json(asistente);
}

module.exports=asistentesCtrl;