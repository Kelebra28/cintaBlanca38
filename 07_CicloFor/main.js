//Ciclo For

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);


//Estructura del in FOR

// for(inicio; liminte, secuencia){
//     acciones
// }

    // 1) iterador o variable de control
    // 2) condición de iteración
    // 3) cómo afectar al iterador tras ciclo(iteracion)

    
for(var i = 0; i <= 10; i = i + 1 ){
//   console.log(i);  
}

// Usando el ciclo FOR , monstrar en mi consola los  numeros:
//  50 al 500 de 10 en 10
// -300 al 0 de 20 en 20
// 0 al -100 de -5 en -5

// 1

for(var x = 50; x <= 500; x = x + 10 ){
    // console.log(x);
}

for(var y = -300; y <= 0; y = y + 20){
    // console.log(y);
}

for( var z = 0 ; z >= -100; z = z - 5){
    // console.log('FizzBuzz: ' + z );
}

// 1-100 Si un numero es divisible entre:
// 3 ---> Fizz
// 5 ---> Buzz
// 3 & 5 --> FizzBuzz

//Ejemplo:
// 1 -> El numero: 1
// 2 -> El numero: 2
// 3 -> Fizz: 3
// 4 -> El numero: 4
// 5 -> Buzz : 5
// ...

// 15 -> FizzBuzz : 15
// // esto no 🚫
// 15 Fizz
// 15 Buzz
// 15 FizzBuzz

var animales = [
    'Gato',
    'Perro',
    'Conejo',
    'Nutria',
    'Iguana',
    'Hamster',
    'Pony'
]
// console.log(animales.length);
// console.log(animales[0]);
// console.log(animales[1]);
// console.log(animales[2]);
// console.log(animales[3]);
// console.log(animales[4]);


for(var r = 0; r < animales.length; r++){
    console.log(animales[r]);
}