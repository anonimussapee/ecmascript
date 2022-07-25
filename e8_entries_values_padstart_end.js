//en esta version ecmascript8 que fue añadida en 2017 se añadieron metodos de transformacion de objetos y relleno de strings y trailling commas
let equipo={
desarrollo_web:"john",
desarrollo_frontend:"john_c",
desarrollo_backend:"john_c_s"
};
console.log(Object.entries(equipo));
//aqui  otro
console.log("solo los valores", Object.values(equipo));
//ahora el relleno de strings
let hola="hola";
console.log(hola.padStart(12,"abc"));
console.log(hola.padStart(10," "));
//ahora con padEnd
console.log("que mas".padEnd(15,"ve"));
console.log("y ahora".padEnd(12," que"));
//y por ultimo y no menos importante trailing commas
let equipo_2={
    name:"john",
    second_name:"cordova",
}
//ahora van a mirar que admite coma al final del diccionario para que no tenga problemas

//ahora vamos con el async y await que hacen lo mismo ejectar asincronismo pero de formas distintas

const imprime=()=>{
    return new Promise((y,n)=>{
        if(true){
            y("async realizado");
        }else{
            n("UPS! hubo un error no se realizo");
        }
    });
}
const pedido=async()=>{
    const peticion=await imprime();
     console.log(peticion)
}
pedido()
//ahora con try catch y settimeout, new Error
const promesa=()=>{
    return new Promise((y,n)=>{
        (false) ? setTimeout(()=>y("ya esta listo"),2000):n(new Error("UPS hubo un error"));
    });
}
const pedido_2=async()=>{
    try {
        const realizado=await promesa();
        console.log(realizado);
    } catch (error) {
        console.log(error);
    }
}
pedido_2();