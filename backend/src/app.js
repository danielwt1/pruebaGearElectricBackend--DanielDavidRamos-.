const express=require('express');
const cors=require('cors');

const app=express();

//settings
app.set('port',process.env.PORT || 4000);

//para intercambiar datos entre 2 servidores cors
app.use(cors());

app.use(express.json());
//rutas
app.use('/api/asistentes',require('./routes/asistentes'))
module.exports=app;