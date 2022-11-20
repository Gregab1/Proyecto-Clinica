class Paciente{
    constructor(nombre,apellido,edad,dni,obrasocial){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.dni=dni;
        this.obrasocial=obrasocial;

        
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getName() {
        return  this.nombre;
    }
    setApellido(apellido) {
        this.apellido = apellido
    }
    getApellido() {
        return this.apellido;
    }
    setEdad(edad) {
        this.edad = edad
    }
    getEdad() {
        return this.edad;

    }
    setDni(dni) {
        this.dni = dni
    }
    getDni() {
        return this.dni;
    }
    setObrasocial(obrasocial) {
        this.obrasocial = obrasocial;
    }
    getObrasocial() {
        return this.obrasocial;
    }
   
}
class Doctor{
    constructor(nombre,apellido,matricula,profesion){
        this.nombre=nombre;
        this.apellido=apellido;
        this.matricula=matricula;
        this.profesion=profesion;
        
}   
    setNombre(nombre) {
            this.nombre = nombre;
    }
    getNombre() {
         return this.nombre; }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    getApellido() {
        return this.apellido;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
    getMatricula() {
        return this.matricula;
    }
    setProfesion(profesion) {
        this.profesion = profesion;
    }
    getProfesion() {
        return this.profesion;
    }
} 
class Turnos{
    constructor(fecha,hora,paciente,doctor){
this.fecha = fecha;
this.hora = hora;
this.paciente=paciente;
this.doctor =doctor;
    }
    setFecha(fecha) {
        this.fecha=fecha;
}  
getFecha() {
     return this.fecha;
 }
 setHora(hora) {
    this.hora=hora;
} 
setPaciente(paciente) {
this.paciente=paciente;
}
getPaciente() {
    return this.paciente;
}
setDoctor(doctor){
    this.doctor=doctor;
}
getDoctor() {
    return this.doctor;
}
}
module.exports={Paciente,Doctor,Turnos}




