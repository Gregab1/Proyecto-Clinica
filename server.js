const { request, response } = require('express');
const express=require('express');
const path=require('path');
const app=express();
const port = process.env.PORT  || 3000;
const funcion=require('./app');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//cargar el menu
app.get('/',(request,response)=>{
   
  response.sendFile(path.join(__dirname,'./vista/ClinicaSA.html'));  
});
//formulario para añadir pacientes
app.get('/agregarPaciente',(request,response)=>{
response.sendFile(path.join(__dirname,'./vista/AnadirPaciente.html'));

});
//guardo los pacientes en la unidad local
app.post('/agregarPaciente',(request,response)=>{
  console.log('llego un post Añadir');
  funcion.cargarPacientes(request.body);
  response.redirect('/agregarPaciente')
 

  
  

});
//formulario para añadir doctores
app.get('/agregarDoctor',(request,response)=>{
response.sendFile(path.join(__dirname,'./vista/AnadirDoctor.html'));
});
//guardar los doctores en la unidad local
app.post('/agregarDoctor',(request,response)=>{
  console.log('llego un post Añadir');
  funcion.cargarDoctores(request.body);
  response.redirect('/agregarDoctor');
});
app.get('/VerPacientes',(request,response)=>{ 
response.sendFile(path.join(__dirname,'./vista/VerPacientes.html'));
});
// ver pacientes en en html 
app.get('/VerPacientesTable',(request,response)=>{
var listarPacientes=funcion.mostrarPacientes();
response.send(listarPacientes);
});
app.get('/VerDoctores',(request,response)=>{ 
  response.sendFile(path.join(__dirname,'./vista/VerDoctores.html'));
  });
//ver doctores por html
app.get('/VerDoctoresTable',(request,response)=>{
  var listarDoctores=funcion.mostrarDoctores();
  response.send(listarDoctores);
  });
app.get('/AgregarTurno',(request,response)=>{
response.sendFile(path.join(__dirname,'./vista/AnadirTurno.html'));
});
//cargo un turno
app.post('/agregarTurno',(request,response)=>{
  console.log('llego un post Añadir');
  funcion.gestionarTurno(request.body);
  response.redirect('/agregarTurno');
});
app.get('/MostarTurno',(request,response)=>{
  response.sendFile(path.join(__dirname,'./vista/ListarTurnos.html'));
  });
  //ver turnos 
app.get('/mostrarTurnosTabla',(request,response)=>{
  var listarTurnos=funcion.mostarTurnos();
  response.send(listarTurnos);
  });
app.listen(port,()=>{
    console.log(`Expres listen on port ${port}!`);
})

