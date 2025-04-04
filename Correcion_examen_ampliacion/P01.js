/* Crea una funcion llamada sumarPares que reciba
un array de números y devuelva la suma de todos los numeros pares. */

function sumarPares(array) {

    let suma = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 === 0) {

            suma+= array[index];
            
        }        
    }
    return suma;
    
}

miSuma = sumarPares([1,2,3,4,5,6]);
console.log(miSuma);