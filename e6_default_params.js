function imprimir(nombre,edad,ciudad){
    var nombre= nombre ||"john";
    var edad=edad||23;
    var ciudad=ciudad||"otavalo";
    console.log("hola soy "+nombre+" y tengo "+edad+" años, vivo en la ciudad de "+ciudad);

}
//ahora en ecmascript6 2015
function imprimir_2(nombre="john",edad=23,ciudad="otavalo"){
    console.log("hola soy "+nombre+" y tengo "+edad+" años, vivo en la ciudad de "+ciudad);
}
imprimir_2();

//ademas se añadio la concatenación, antes lo haciamos asi
var hola="hola";
var mundo="mundo";
var frase_clasica=hola+" "+mundo;
console.log(frase_clasica);

//en esta version de ecmascript6 se concatena de manera mas amigable
var hola_2="Hola";
var mundo_2="Mundo";
var frase_clasica_2=`${hola_2} ${mundo_2}`;
console.log(frase_clasica_2);

//se añadio tambien la multilinea, antes lo haciamos asi
var frase_larga="hola gente del colegio ya programo y soy mucho mejor que uds\n"+
"y ahora me pelan el python";
console.log(frase_larga);
//en la actualiación ecmascript6 ya es mas amigable
var frase_larga_2=`hola bizcocha me pelas el python y todos los lenguajes de programación
ademas me vale python tu vida y espero que el ariel izama se haga cargo de todos los wawas que tengas`;
console.log(frase_larga_2);
