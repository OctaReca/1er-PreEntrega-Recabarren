function promediarNotas () {
let notas;
let promedio;
let suma=0;

let nnotas= parseInt(prompt("Escriba la cantidad de notas a promediar"))
for(i=0; i< nnotas; i++) {
    let notas= parseInt(prompt("Escriba la nota " + i));
    suma=suma+notas;
}

promedio= suma/nnotas;

console.log("El resultado es " + promedio);

if (promedio>=7) {
    console.log("APROBADO")
}
else {
    console.log("DESAPROBADO")
}
}

promediarNotas()
