const boton=document.getElementById("btn");
boton.addEventListener("click",async function(){
const modulo= await import("./file.js");
modulo.hola();
});
//esto se añadio en 2020 el dinamic imports
 //y ademas se añadio en big int
 const bignumber=12393449342792213122;
 const bigint=BigInt(123934493427922121433);
 console.log(bignumber);
 console.log(bigint);
 // y ahora se pueden ejecutar varias prommesas con el nuevo metodo allsettled
 let promesa1=new Promise((y,n)=>{n("error wey");});
 let promesa2=new Promise((y,n)=>{y("se cumplio");});
 let promesa3=new Promise((y,n)=>{y("se cumplio 1");});
 Promise.allSettled([promesa1,promesa2,promesa3]).then(response=>console.log(response));
  
 //aparte de eso tenemos el global this que no entiendo muy bien para que va a servir
 console.log(globalThis);

 //y tenemos tambien el operador nullish coalescing que consiste en evaluar si una variable esta definida nula para asignarle un valor
 var nulo=null?? "string por default";
 var nulo_2="nuloo_2 "?? "string por default";
 console.log(nulo);

 //tambien se unio el optional chaining que ayuda a quue si no encuentra lo que estamos buscando no rompe nuestro codigo.
 var user={};
 console.log(user?.profile?.user);
