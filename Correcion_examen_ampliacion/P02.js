/* 

Una funcion llamada invertirArray 
que reciba un array y devuelva uno nuevo con 
orden inverso.
Ejemplo 

["a","b","c","d"] 

["d","c","b","a"]

*/


function invertirArray(miArray) {

    let array_invertido = [];
    for (let index = miArray.length-1; index >=0; index--) {

        array_invertido.push(miArray[index]);
    }
    return array_invertido;
}

let Ejemplo = invertirArray(["a","b","c","d"]);
console.log(Ejemplo);

