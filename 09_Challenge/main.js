//Inputs
var preguntaNombre = document.getElementById('preguntaNombre');
var preguntaPizza = document.getElementById('preguntaPizza');
var preguntaDireccion = document.getElementById('preguntaDireccion');
var preguntaTelefono = document.getElementById('preguntaTelefono');
// etiqueta p
var nombre = document.getElementById('name');
var telefono = document.getElementById('telefno');
var pizza = document.getElementById('pizza');
var direccion = document.getElementById('direccion');
//Boton
var boton = document.getElementById('orden');
//Card
var respuesta = document.getElementById('respuesta')

// console.log(preguntaDireccion, preguntaNombre, preguntaTelefono, preguntaPizza);

// console.log(nombre, telefono, pizza, direccion);
// console.log(boton);



function resultados (){
    var dataNombre = preguntaNombre.value;
    var dataTelefono = preguntaTelefono.value;
    var dataPizza = preguntaPizza.value;
    var dataDireccion = preguntaDireccion.value;

    var dataPizzaReal = dataPizza.toLowerCase();


    nombre.innerHTML = dataNombre;
    telefono.innerHTML = dataTelefono;
    direccion.innerHTML = dataDireccion;

    if(dataPizzaReal === 'si'){
        pizza.innerHTML = 'Eres de los mios :D'
    }else if(dataPizzaReal === 'no'){
        pizza.innerHTML = 'Crei que eramos amigos :c'
    }else{
        pizza.innerHTML = 'Escribe si o no  :s'
    }

    console.log(respuesta.classList);
    respuesta.classList.remove('none')

    
}

boton.addEventListener('click',resultados)