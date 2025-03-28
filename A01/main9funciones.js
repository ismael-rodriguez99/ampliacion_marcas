
//funcion incrementa 2

function ElDoble(nn)
{
    return nn + nn;
}

for (let index = 0; index <40; index ++)
{
console.log(ElDoble(34));
console.log(ElDoble(341));
console.log(ElDoble(342));
}


//Funcion incrementa 3

function ElTriple(mm) 
{
    return mm + 3; 
}

for (let index = 0; index < 2; index++) {
    console.log(34);
    let num = ElTriple(6);
    console.log(num);
    let num2 = ElTriple(ElTriple(1));
    console.log(num2);
}

// Incrementar 

function incrementarN(numero,incremento) 
{
    return numero + incremento;
}

console.log(incrementarN(15,4));

let num4 = ElTriple(ElTriple(1));