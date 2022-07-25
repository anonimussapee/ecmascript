// esto es lo implementado en ecmascript9 edicion del 2018
//spread y rest
let obj={
    nombre:"john",
    apellido:"cordova",
    ciudad:"otavalo"
}
let {nombre, ...rest}=obj;
console.log(nombre, rest)
let obj2={
    ...obj,
    lenguaje:"javascript"
}
console.log(obj2);

//tambien se añadio el finally para las promesas
let promesa=()=>{
    return new Promise((y, n) => {
        (false)? setTimeout(()=>y("ya esta tu promesa ahora sigue el finaly"),3000):n(new Error("UPS! hay un error"));
    })
};
promesa().then(Response=>console.log(Response)).catch(Error=>console.log(Error)).finally(()=>console.log("ya se termino ,este es el finally"));

// y ahora las regular expresions
let regex=/([0-9]{4})-([0-9]{2})-([0-9]{2})/;
let fecha=regex.exec("2010-11-24");
console.log(fecha[1],fecha[2],fecha[3]);