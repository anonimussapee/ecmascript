//se añadio el operador de propagacion y ...all(esta puede tener cualquier nombre)
let obj_1={nombre:"john",localidad:"la compania",edad:22}
let obj_2={...obj_1, etnia:"indigena"};
//console.log(obj_2);
let {etnia,...all}=obj_2;
let {nombre,...todo2}=obj_1;
console.log(todo2,all);

//y tambien se añadio finally para realizar alguna accion al finalizar el promise
const hola=()=>{
    return new Promise((y,n)=>{(false)?setTimeout(()=>y("hola wey"),1500):n("error no hay saludo")});
};
hola().then(y=>console.log(y)).catch(error=>console.log(error)).finally(()=>console.log("ya termino"));

//tambien se agrego expreciones regulares, poderosos metodos para realizar busquedas en patrones 
const regex=/([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const fecha= regex.exec(`2022-07-18`);
const anio=fecha[1];
const mes=fecha[2];
const dia=fecha[3];
console.log(dia,mes,anio);