// alert("Hola");

var j1 = prompt("Ingresa el valor de J1"); // string
var j2 = prompt("Ingresa el valor de J2"); // string

// Concatenar
console.log("J1: " + j1);
console.log("J2: " + j2);

// 3 casos J1 ✅
if(j1 === "papel" && j2 === "piedra") {
    console.log("Gana J1");
} else if(j1 === "piedra" && j2 === "tijeras") {
    console.log("Gana J1");
} else if(j1 === "tijeras" && j2 === "papel") {
    console.log("Gana J1");
// 3 casos J2
} else if(j2 === "papel" && j1 === "piedra") {
    console.log("Gana J2");
} else if(j2 === "piedra" && j1 === "tijeras") {
    console.log("Gana J2");
} else if(j2 === "tijeras" && j1 === "papel") {
    console.log("Gana J2");
// 3 casos empate
} else if(j1 === "papel" && j2 === "papel") {
    console.log("Empate");
} else if(j1 === "piedra" && j2 === "piedra") {
    console.log("Empate");
} else if(j1 === "tijeras" && j2 === "tijeras") {
    console.log("Empate");
}



