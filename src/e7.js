// antes haciamos una busqeda en el array con el indexof pero en la actualiacion en ecmascript7 se añadio i ncludes
let numeros=[1,2,3,4,5,6,7,8];
if(numeros.includes(3)){
    console.log(`el valor 3 existe en el array numeros`);
    console.log(`y se encuentra en el index ${numeros.indexOf(3)}`)
}else{
    console.log("el valor 3 no existe en el array numeros");
}
//asi lo haciamos sin el includes
let numeros_2=[1,2,3,4,5,6,7,8];
let numero8=numeros_2.some(function(item){
return item===9
});
if(numero8===true){
    console.log("exxiste");
}else{
    console.log("no esta aqui");
}

//ademas de esta caracteristica tambien fue añadida la operación de potencia

let dos=2;
let cuatro=4;
console.log(dos**cuatro);