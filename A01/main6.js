var num = 30;
console.log("el valor de num es "+ num);

num = num +1;
console.log("el valor de num es "+num);

num = num +5; 
console.log(" el valor de num es "+num);

num++; // es lo mismo exactamente que num = num +1;
console.log(" el valor de num es "+num);

num = num -1;
console.log(" el valor de num es "+num);

num--;  // es lo mismo exactamente que num = num -1;
console.log(" el valor de num es "+num);

// objeto o registro

let objetoAlumno = {
    nombre: "Bego",
    cod_Alumno: "46735"
};
console.log(objetoAlumno);
console.log("el nombre del alumno es "+ objetoAlumno.nombre);
console.log("el código del alumno es "+ objetoAlumno.cod_Alumno);

let objetoAula = {
    numero_clase: "3",
    numero_alumnos: "30",
    letra_clase: "A",
    numero_mesas: 32,
    numero_perchas: 15,
    nombre: "ASIR1"
}
console.log(objetoAula);
console.log("el numero de aula es "+objetoAula.numero_clase);
console.log("el numero de alumnos es "+objetoAula.numero_clase);
console.log("la letra del aula es "+objetoAula.letra_clase);

// sumar en una variable las mesas más las perchas

var mp = objetoAula.numero_mesas + objetoAula.numero_perchas;
console.log("mp es "+mp);