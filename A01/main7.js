//numero aleatorio entre 1 y 13

let numero_aleatorio = Math.floor (Math.random()*13) + 1;
if (numero_aleatorio>10 ){
    numero_aleatorio=10
}

let numero_aleatorio2 = Math.floor (Math.random()*13) + 1;

if (numero_aleatorio2>10){
    numero_aleatorio2=10
}


console.log("Tus cartas son " + numero_aleatorio+" y "+numero_aleatorio2);



let palabro = prompt("Carta más(C) o plantarse(P)");

if (palabro == "C") {
    console.log("Pedir una carta más")
}


else if (palabro == "P") {
    console.log("Plantarse")
}

else {
    console.log("Por favor, introduce: Carta más(C) o plantarse(P)")
}


