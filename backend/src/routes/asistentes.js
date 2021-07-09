const {Router}=require('express');
const router=Router();
const{getAsistentes,AñadirAsistentes,editarAsistentes,deleteAsistente,getAsistente}=require('../controllers/asistentes.controller')


router.route('/')
    .get(getAsistentes)
    .post(AñadirAsistentes)
router.route('/:id')
    .get(getAsistente)
    .put(editarAsistentes)
    .delete(deleteAsistente)




  

module.exports=router;