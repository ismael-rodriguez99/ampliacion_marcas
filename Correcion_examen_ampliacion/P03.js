/* 

Escribe un programa del 1 al 100
Si el número es múltiplo de 3, imprimir "Fizz"
Si el número es de 5 "Buzz"
Si es de ambos "FizzBuzz"
Si no imprimir el número

*/


for (let index = 1; index <= 100; index++) {
    
    

    if ((index % 3 == 0) && (index % 5 == 0)) {
        console.log("fizzBuzz");
    }


    else if (index % 3 == 0){
        console.log("fizz");
    }

    else if (index % 5 == 0){
        console.log("Buzz");
    }

    else
    {
        console.log(index);
    }
    
}