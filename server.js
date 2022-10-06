const { request, response } = require('express');
const express=require('express');
const path=require('path');
const app=express();
const port=3000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get('/',(request,response)=>{
    //response.send('hello Expres.... ho tambien hola mundo desde node js me va a c9istar un moston.! :)');
  // response.sendFile(path.join(__dirname,'./prueba/perfil.html'));
  response.sendFile(path.join(__dirname,'./prueba/ClinicaSA.html'));  
});
app.get('/Anadir',(request,response)=>{
response.sendFile(path.join(__dirname,'./prueba/Anadir.html'));
});
app.post('/home',(request,response)=>{
  console.log('llego un post Añadir');
  response.send(request.body);
});
app.get('/AnadirD',(request,response)=>{
response.sendFile(path.join(__dirname,'./prueba/AnadirD.html'));
});
app.post('/home1',(request,response)=>{
  console.log('llego un post Añadir');
  response.send(request.body);
});
app.get('/VerD',(request,response)=>{ 
response.sendFile(path.join(__dirname,'./prueba/VerD.html'));
});
app.get('/VerP',(request,response)=>{
response.sendFile(path.join(__dirname,'./prueba/VerP.html'));
});
app.get('/AnadirT',(request,response)=>{
response.sendFile(path.join(__dirname,'./prueba/AnadirT.html'));
});
app.get('/EliminarT',(request,response)=>{
response.sendFile(path.join(__dirname,'./prueba/EliminarT.html'));
});
app.listen(port,()=>{
    console.log(`Expres listen on port ${port}!`);
})