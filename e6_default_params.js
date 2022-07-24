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

//ahora tenemos desestructuracion que nos ayuda a encontrar y presentar el contenido de un objeto, antes lo haciamos asi, 
var john={
    nombre:"john malku",
    edad:23,
    lenguaje:"javascript"
};
console.log(john.nombre+" programa en lenguaje "+john.lenguaje);
//ahora lo hacemos de esta manera con la desestructuracion 
var john_1={
    nombre:"john malku",
    edad:23,
    lenguaje:"javascript"
};
var {nombre,edad,lenguaje}=john_1;
console.log(`${nombre} tiene ${edad} años y programa en lenguaje ${lenguaje}`);

//tambien se agrego el operador de propagación, spread operator, antes no se podia tan facil, y se hacia con otros prototipos de concatenacion, pero ahora ya es mucho mejor
var team1=["john","elon","bill","ryan"];
var team2=["steve","nikola","wosniak"];
var all_team=[...team1,...team2];
console.log(all_team);

//ademas se añadio let que nos sirve para guardar valores como var solo que esta solo es accesible desde su scope
{var globlalvar="es global var";};
{let globallet="es global let";
console.log(globallet);//solo es accesible desde su scope local
};
console.log(globlalvar);//es accesible desde cualquier scope globla,local

//tambien se añadio const para las constantes es decir no pueden cambiar
const uno=1;
//uno=uno+uno; no cambia su valor y se mantiene
console.log(uno);

 