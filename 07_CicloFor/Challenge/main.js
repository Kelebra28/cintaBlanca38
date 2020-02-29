

for(var i = 1; i <= 100;  i++){

        if( i % 3 === 0 ){
            // console.log(i + " :es divisible entre 3");
        }else{
            // console.error( i + " :no es divisible entre 3 ");
        }
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

for(var x = 1; x <=100; x++){
    if(x % 3 === 0 && x % 5 === 0){
        console.log(x + ' fixzzBuzz');
    }else if( x % 5 === 0){
        console.log(x + ' buzz');
    }else if(x % 3 === 0){
        console.log(x + ' fizz');
    }else{
        console.log( x );
    } 
}