//el metodo object , entries y value nos permite transformar uun objeto a una matriz o array
const datos={
    frontend:"john",
    backend:"john m",
    designer:"john c"
}
const entries=Object.entries(datos);
console.log(entries);
console.log(entries.length);
const valores=Object.values(datos);
console.log(valores);


const txt="que mas";
console.log(txt.padStart(11,"oye "));
console.log(txt.padEnd(10," ve"));
