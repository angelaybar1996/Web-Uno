function validar(){
   var nombre,apellido,correo,usuario,clave,telefono;
   nombre=document.getElementById("nombre").value;
   apellido=document.getElementById("apellido").value;
   correo=document.getElementById("correo").value;
   usuario=document.getElementById("usuario").value;
   clave=document.getElementById("clave").value;
   telefono=document.getElementById("telefono").value;

   if(nombre===""|| apellido===""|| correo===""||usuario===""||clave===""||telefono===""){
       alert("Todos los campos son obligatorios");
       return false;
   }
   else if(nombre.length>20||apellido.length>20){
       alert("El nombre y el apellido no deben tener mas de 20 caracteres");
       return false;
   }
   else if(correo.length>25){
       alert("El correo electrónico es muy largo");
       return false;
   }
   else if(usuario.length>10||clave.length>10){
     alert("El usuario y la clave deben tener 10 caracteres como máximo");
     return false;
   }
   else if(telefono.length>10){
     alert("El telefono es muy largo");
     return false;
   } 
   else if(isNaN(telefono)){
    alert("El teléfono no es válido");
    return false;
  } 
}
