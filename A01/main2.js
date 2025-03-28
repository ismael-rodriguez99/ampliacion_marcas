function shuffleArray(arr) {
    arr.sort(function (a, b) {
      return Math.random() - 0.5;
    });
}

function calidad(miArray) 
{
    let suma = 0;
    for (let index = 0; index < miArray.length; index++) 
        {
            suma = suma + miArray[index];  
        }
        return suma;
}

let aBaraja = [1,2,3,4,5,6,7,8,9,10,11,12];

console.log(aBaraja);

shuffleArray(aBaraja);

console.log(aBaraja);

// jugador 1
let aJugador1 = [];
aJugador1.push(aBaraja[0]);
aJugador1.push(aBaraja[4]);
aJugador1.push(aBaraja[8]);
console.log("Mano del jugador1");
console.log(aJugador1);
// jugador 2
let aJugador2 = [];
aJugador2.push(aBaraja[1]);
aJugador2.push(aBaraja[5]);
aJugador2.push(aBaraja[9]);
console.log("Mano del jugador2");
console.log(aJugador2);
// jugador 3
let aJugador3 = [];
aJugador3.push(aBaraja[2]);
aJugador3.push(aBaraja[6]);
aJugador3.push(aBaraja[10]);
console.log("Mano del jugador3");
console.log(aJugador3);
// jugador 4
let aJugador4 = [];
aJugador4.push(aBaraja[3]);
aJugador4.push(aBaraja[7]);
aJugador4.push(aBaraja[11]);
console.log("Mano del jugador4");
console.log(aJugador4);


let suma = 0;

for (let index = 0; index < aJugador1.length; index++) 
{
    suma = suma + aJugador1[index];  
}
console.log("calidad de la mano jugador 1 "+suma);
suma = 0;
for (let index = 0; index < aJugador2.length; index++) 
{
    suma = suma + aJugador2[index];  
}
console.log("calidad de la mano jugador 2 "+suma);
suma = 0;
for (let index = 0; index < aJugador3.length; index++) 
{
    suma = suma + aJugador3[index];  
}
console.log("calidad de la mano jugador 3 "+suma);
suma = 0;
for (let index = 0; index < aJugador4.length; index++) 
{
    suma = suma + aJugador4[index];  
}
console.log("calidad de la mano jugador 4 "+suma);


// funcion que sea calidad
// que jugador va ganando o perdiendo

console.log("DESPUÉS DE CREAR LA FUNCIÓN");

console.log("calidad de la mano jugador 1 "+calidad(aJugador1));
console.log("calidad de la mano jugador 2 "+calidad(aJugador2));
console.log("calidad de la mano jugador 3 "+calidad(aJugador3));
console.log("calidad de la mano jugador 4 "+calidad(aJugador4));

let suma1 = 12;
let suma2 = 5;
let suma3 = 6;
let suma4 = 28;

let sumaTotal = [suma1, suma2, suma3, suma4]


console.log("EL GANADOR ES :      ");

if (suma1>suma2 && suma1>suma3 && suma1>suma4){
    console.log("El jugador uno "+suma1);
}

else if (suma2>suma1 && suma2>suma3 && suma2>suma4){
    console.log("El jugador dos "+suma2);
}

else if (suma3>suma1 && suma3>suma2 && suma3>suma4){
    console.log("El jugador tres "+suma3);
}

else if (suma4>suma1 && suma4>suma3 && suma4>suma3){
    console.log("El jugador cuatro "+suma4);
}

n1 = 3;
n2 = 4;
n3 = 1;
n4 = 9

mayor = -1
mayor2 = [n1,n2];
mayor3 = [n1,n2,n3];
mayor4 = [n1,n2,n3,n4];



// for (let index = 0; index > mayor2.length; index++) {
   
if (mayor2 [0] > mayor2 [1]) {
        console.log(mayor2);    
    }

 else {
        console.log(mayor2 [1]);
    }



if (mayor3[0]> mayor3 [1] && mayor3 [0]> mayor3 [2]) {
    console.log("GANA EL NUMERO 1 con la carta:"+ mayor3 [0] );}

else if (mayor3[1]> mayor3 [0] && mayor3 [1]> mayor3 [0]) {
    console.log("GANA EL NUMERO 2 con la carta:"+ mayor3 [1] );
}

else if (mayor3[2]> mayor3 [0] && mayor3 [2]> mayor3 [1]) {
    console.log("GANA EL NUMERO 3 con la carta:"+ mayor3 [2] );
}



if (mayor4[0]> mayor4 [1] && mayor4 [0]> mayor4 [2]) {
    console.log("GANA EL NUMERO 1 con la carta:"+ mayor4 [0] );}

else if (mayor4[1]> mayor4 [0] && mayor4 [1]> mayor4 [0] && mayor4 [1]> mayor4 [3] ) {
    console.log("GANA EL NUMERO 2 con la carta:"+ mayor4 [1] );
}

else if (mayor4[2]> mayor4 [0] && mayor4 [2]> mayor4 [1] && mayor4 [2]> mayor4 [3] ) {
    console.log("GANA EL NUMERO 3 con la carta:"+ mayor4 [2] );
}

else if (mayor4[3]> mayor4 [0] && mayor4 [3]> mayor4 [1] && mayor4 [3]> mayor4 [2] ){
    console.log("GANA EL NUMERO 4 con la carta:"+ mayor4 [3] );
}





for (let index = 0; index < mayor4.length; index++) {

    if (mayor4[index]>mayor){
    mayor = mayor4[index];
    }
}
console.log("El mayor es : " + mayor);