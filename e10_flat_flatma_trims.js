//en esta version que salio en el 2019 se añadieron flat que aplana los arrays de varios niveles
let numeros=[1,2,3,[1,2,3,[1,2,3,[1,2,3]]]];
console.log(numeros.flat(3));

// ademas de flat map que aplana el array y interactua con los valores
let numeros_1=[1,2,3,4,5];
console.log(numeros_1.flatMap(item=>[item+item]));

//ahora se pueden eliminar los espacios de los strings del inicio y el final
let aloja="     aloja";
let hawai="hawai     ";
console.log(aloja);
console.log(aloja.trimStart());
console.log(hawai);
console.log(hawai.trimEnd());
//ademas de eso se añadio el try catch sin necesidad de escribir catch(error)
try {
    var hola="hola";
    console.log(holaa);
} catch {
    console.log(new Error);
}
//ademas se añadio from entries para volver a convertir los valores de un array en objetos 
let obj1={
    nombre:"tesla",modelo:"s",anio:2017
}
let entries=Object.entries(obj1);
console.log(entries);
console.log(Object.fromEntries(entries));