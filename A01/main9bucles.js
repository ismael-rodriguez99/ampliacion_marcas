
let numObjetivo = 12;
let max0por = 3;
var numJugador;

for (let i = 0; i < 3; i++ )
{
  numJugador =  prompt("intento nº " + i + " dime un número");
  if (numJugador==numObjetivo) 
    {
        console.log("EDLB");
        break;
    }

}

let i = 0;
while (i < 3) {
    
    numJugador = prompt ("intento nº " + i + " dime un número");

    if (numJugador == numObjetivo);
    {
        console.log("EDLB");
        break;
    }
    
}

for (let i = 0; (i < 3); i++ )
    {
      numJugador =  prompt("intento nº " + i + " dime un número");
      if (numJugador==numObjetivo) 
        {
            console.log("EDLB");
            i = i + 3; //i +=3;
            break;
        }
    }