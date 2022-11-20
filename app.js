const clases=require('./Clases');
var fs = require('fs');

var pacientes=[];
var recupararDatos;
var doctores=[];
var recupararDatosd;
var turnos=[];
var recupararDatosT;


try{
    recupararDatos=fs.readFileSync('./modelo/pacientes.txt', 'utf8');
    pacientes=JSON.parse(recupararDatos);
}catch(error){
    pacientes=[];
}
try{
  recupararDatosd=fs.readFileSync('./modelo/doctores.txt', 'utf8');

   doctores=JSON.parse(recupararDatosd); 
    console.log(doctores);
}catch(error){
    doctores=[];
}
try{
    recupararDatosT=fs.readFileSync('./modelo/turnos.txt', 'utf8');
  
     turnos=JSON.parse(recupararDatosT); 
      console.log(turnos);
  }catch(error){
      turnos=[];
  }
function cargarPacientes(atributo){
    
    var nombre=atributo.name;
    var apellido=atributo.apellido;
    var dni=atributo.dni;
    var edad=atributo.edad;
    var obra_social=atributo.obra_social;
    var paciente = new clases.Paciente(nombre,apellido,edad,dni,obra_social);
    pacientes.push(paciente);
   var datosPaciente=JSON.stringify(pacientes);
    fs.writeFile('./modelo/pacientes.txt',datosPaciente,(error,datos)=>{
        if(error){
            console.log('archivo no leido');
        }else{
           console.log('escritura exitosa');}
      });
    

}
function cargarDoctores(atributo){
    
    var nombre=atributo.names;
    var apellido=atributo.apellido;
    var matricula=atributo.matricula;
    var profesion=atributo.profesion;
    
    var doctor = new clases.Doctor(nombre,apellido,matricula,profesion);
   doctores.push(doctor);
   var datosDoctor=JSON.stringify(doctores);
    fs.writeFile('./modelo/doctores.txt',datosDoctor,(error,datos)=>{
        if(error){
            console.log('archivo no leido');
        }else{
           console.log('escritura exitosa');}
      });
    

}
function mostrarPacientes(){
    return pacientes;
}
function mostrarDoctores(){
    return doctores;
}
function gestionarTurno(atributo){
    var fecha=atributo.fecha;
    var hora=atributo.hora;
    var paciente=atributo. names;
    var doctores=atributo.profesion;
    var turno=new clases.Turnos(fecha, hora, paciente, doctores);
    turnos.push(turno);
    var datosTurno=JSON.stringify(turnos);
     fs.writeFile('./modelo/turnos.txt',datosTurno,(error,datos)=>{
         if(error){
             console.log('archivo no leido');
         }else{
            console.log('escritura exitosa');}
       });
}
function mostarTurnos(){
    return turnos;
}
module.exports = { cargarPacientes,cargarDoctores,mostrarPacientes,mostrarDoctores,gestionarTurno,mostarTurnos }