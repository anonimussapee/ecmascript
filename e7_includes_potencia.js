//en esta version que salio en junio de 2016 fue añadido el includes que nos sirve para saber si existe un valor en un array devolviendo true o false
let array=[1,2,3,4,6,7];
if(array.includes(5)){
    console.log("aqui esta el 5");
}else{
    console.log("no existe");
}
//tambien funciona con string
let string="hola wey";
if(string.includes("hola")){
    console.log("existe un hola en ese string");
}else{
    console.log("no existe esa palabra");
}
//ademas se añadio la operacion de potencia
console.log(2**3);