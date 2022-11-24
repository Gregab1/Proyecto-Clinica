const { request, response } = require('express');
const express=require('express');
const path=require('path');//es una vía de acceso en el servidor
const app=express();
const port = process.env.PORT  || 3000;//puerto de acceso de servidor
const funcion=require('./app'); //importo  las funciones
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//cargar el menu
app.get('/',(request,response)=>{
   
  response.sendFile(path.join(__dirname,'./vista/ClinicaSA.html'));  //muestra la barra de nav del menu 
});
//formulario para añadir pacientes
app.get('/agregarPaciente',(request,response)=>{//recibo en el reservidor la ruta agregar paciente
response.sendFile(path.join(__dirname,'./vista/AnadirPaciente.html'));//devuelve el archivi html con el formulario

});
//guardo los pacientes en la unidad local
app.post('/agregarPaciente',(request,response)=>{// introducimos datos en la ruta agregar paciente 
  console.log('llego un post Añadir');
  funcion.cargarPacientes(request.body);
  response.redirect('/agregarPaciente')
 

  
  

});
//formulario para añadir doctores
app.get('/agregarDoctor',(request,response)=>{ //recibe el servidor la ruta para añadir doctores
response.sendFile(path.join(__dirname,'./vista/AnadirDoctor.html')); //devuelve el archivo html con con forilario
});
//guardar los doctores en la unidad local
app.post('/agregarDoctor',(request,response)=>{//introducimos datos en la ruta agregarDoctor
  console.log('llego un post Añadir');
  funcion.cargarDoctores(request.body);
  response.redirect('/agregarDoctor');
});
app.get('/VerPacientes',(request,response)=>{ //el servidor recibe la ruta ver  
response.sendFile(path.join(__dirname,'./vista/VerPacientes.html'));//muestra el archivo html con los pacientes
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
  //muestra el html para eliminar
  app.get('/EliminarTurno',(request,response)=>{
  response.sendFile(path.join(__dirname,'./vista/EliminarTurno.html'));
   
    });
    //rebe los datos del formularui para eliminar
    app.post('/EliminarTurnoPost',(request,response)=>{
      funcion.eliminarTurno(request.body);
      response.redirect('/EliminarTurno');
    });
app.listen(port,()=>{
    console.log(`Expres listen on port ${port}!`);
})

