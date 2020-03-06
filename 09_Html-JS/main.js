
var titulo = document.getElementById('titulo');
var subtitulo = document.getElementById('subtitulo');
var parrafo = document.getElementById('parrafo');
var texto = document.getElementById('texto')
var textoInp = document.getElementById("textoInp");

var boton = document.getElementById('boton')


function cambiar(){
    titulo.innerHTML = "Soy el titulo cambiado desde JS";
    subtitulo.innerHTML = 'Cambie';
    parrafo.innerHTML = 'Lol xd';
    var valorInp = texto.value
    console.log(valorInp);
    textoInp.innerHTML = valorInp

}
boton.addEventListener('click',cambiar)
