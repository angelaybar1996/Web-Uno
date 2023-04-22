var nombre=prompt("Ingrese su nombre:","");
var elemento1=document.getElementById("titulo");
elemento1.innerHTML="<h1>Bienvenido "+nombre+" a Lambda </h1>";

var elemento2=document.createElement("elemento2");
var texto2=document.createTextNode("Vas a encontrar las mejores series, juegos y animes conocidos");
elemento2.appendChild(texto2);
document.getElementById("subtitulo").appendChild(elemento2);

var edad=prompt("ingresa tu edad:","");
if (edad>18) {
	alert("Bienvenido");
}
if(edad<18){
  alert("Anda a estudiar");
}
var dias=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
var elemento3=document.getElementById("contenido");
elemento3.innerHTML="<p>dias disponibles: "+dias+"</p>";

var libros=["un estudio en escarlata","cien años de soledad","cartero","el resplandor","el loco de praga"];
var elemento5=document.getElementById("contenido2")
elemento5.innerHTML="<p>Libros recomendados: "+libros+"</p>";


var elemento4=document.getElementById("caja1")
var lista=confirm("Desea ver información especial?")
if(lista){
  var pelis=getElementById("pelis");
  pelis.style.display="block";
}



















            
 
