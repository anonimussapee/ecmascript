//en esta version se actiali un metodo que ya existia replace
let string="john es un programador y john sabe que el futuro es hoy";
console.log(string.replace("john","malku"));
console.log(string.replaceAll("john","malku"));

//tambien se añadieron los metodos privados dentro de las clases añadiendo almoadilla
 class sms{
    #imp_1(value){
        console.log(value);
    }
    imp(value){
        console.log(value);
    }
 }
 const mensaje=new sms();
 mensaje.imp("hola amigos")

 //ademas se añadio any para las promesas es decir que solo mostrara la promesa que se resuelva primero, no nos mostara mas promesas sino solo la que se haya resuelto primero
  const promesa_1=new Promise((y,n)=>{
    n("errorson");
  });
  const promesa_2=new Promise((y,n)=>{
    y("resuelto");
  });
  const promesa_3=new Promise((y,n)=>{
    y("resuelto_2");
  });
  Promise.any([promesa_1,promesa_2,promesa_3]).then(response=>console.log(response));

//aparte de eso se agregaron weakref para las clases para que no sean recogidos por la basura que recoje Referencias débiles
//Un objeto WeakRef consiste en mantener una referencia débil a otro objeto, para evitar que ese objeto sea eliminado por el Garbage Collection{target="_blank"}.
class unclass{
    constructor(value){
        this.ref =new WeakRef(value);
    }
}

// ademas se agregaron nuevos operadores 
let estrue=true;
let esfalse=false;
console.log(estrue &&= esfalse);

 estrue=true;
esfalse=false;
console.log(estrue ||= esfalse);

 estrue=undefined;
 esfalse=false;
console.log(estrue ??= esfalse);
