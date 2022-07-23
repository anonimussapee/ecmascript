//lo que haciamos antes de ecmascript6 estableciamos en el bloque de codigo
function valores(nombre,edad,pais){
var nombre=nombre||"john";
var edad=edad||23;
var pais=pais||"EC";
console.log("nombre: "+nombre+" edad: "+edad+" país: "+pais);
}
valores();
//e6
function valores_2(nombre="john",edad=22,pais="EC"){
    console.log("nombre: "+nombre+" edad: "+edad+" país: "+pais);
}
valores_2();
// antes la concatenacion
let hola="hola";
let mundo="mundo";
console.log(hola+" "+"mundo");
//e6
console.log(`${hola} ${mundo}`)

//traer valores de un objeto antes
let avion={
    tipo:`comercial`,
    color:`blanco`,
    pais:`Ecuador`
}
console.log("nuestro avio tiene las siguientes caracteristicas, es:"+avion.tipo,avion.color,avion.pais);

//e6
let {tipo,color,pais}=avion;
console.log(`este avion es tipo ${tipo} de color ${color} y es del país ${pais}`);

//tambien se añadio el operador de propagacion o spread operator
let equipo1=["john","moly","camila"]
let equipo2=["malku","lola","susan"]
let todos=[...equipo1, ...equipo2]
console.log(todos);

//tambien se añadio let y const
//let solo esta disponible en el bloque de codigo en su scope local y var en scope global
//const es una constante al cual si queremos cambiarle su valor no nos lo va a permitir

//promises y arrow functions

let datos=false;
let team=["john","johny","johnnii","johnnny"]
let sucede= ()=>{
    return new Promise((resolve,reject)=>{
        var data=team;
        (datos===true)
        ? resolve(data)
        : reject("ups tienes el error");
    });
}
//sucede().then(Response=>console.log(Response)).catch(error=>console.log(error));


let avion1="avion";
let camion="camion";
console.log(avion1.padStart(8,"un "));
console.log(camion.padStart(9,"el "));
console.log(avion1.padEnd(10," ----"));
console.log(camion.padEnd(10," ----"));
