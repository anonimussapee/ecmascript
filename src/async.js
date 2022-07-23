const hola=()=>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=>resolve("que onda wey"),3000)
        :reject(new Error("Error wey"))
    })
};
const asinc=async()=>{
    const ola=await hola();
    console.log(ola);
};
asinc()


//

const otroasinc=async()=>{
    try{
const hole=await hola();
console.log(hole);
    }catch(error){
        console.log(error);
    }
}
otroasinc()


//practicando el promise y el async

const mostrar=()=>{
    return new Promise((listo,no)=>{
        (false)
        ? setTimeout(()=>listo("esta listo"),1500)
        : no(new Error ("hay un error aqui"));
    })
};
const sincro=async()=>{
    try{
    const listo= await mostrar();
    console.log(listo);
    }catch(error){
        console.log(error);
    }
}
sincro()


const lista=[1,2,3,5,4,6];
const see=()=>{
    return new Promise((yes,no)=>{
        if(lista.length===0){
            no(new Error("hay un error aqui,  no hay datos"));
        }else{
            setTimeout(() => {yes(lista)
                
            }, 1500);
        }
    })
};
const asi=async()=>{
    try{
        const awai=await see();
        console.log(awai);
    }catch(error){
        console.log(error);
    }

}
asi()

const datos=[
    {producto:"azucar", costo:7, peso:"7kilos"}
];
datos.push({producto:"sal", costo:1, peso:"2kilos"});
datos.unshift({producto:"allino-moto", costo:0.05, peso:"2gramos"});
datos.push({producto:"arroz rico", costo:10, peso:"10kilos"});
datos.unshift({producto:"helado topsy ", costo:0.25, tipo:"dulce", sabor:"chocolate y vainilla"});
datos.push({producto:"rocklets", costo:0.25, tipo:"dulce" , sabor:"chocolate"});
datos.unshift({producto:"fideos oriental", costo:1, peso:"500gramos"});
datos.push({producto:"aliño", costo:1, peso:"300ml"});
datos.unshift({producto:"cafe", costo:0.30, peso:"25gramos"});
//console.log(datos);
const get=()=>{
return new Promise((y,n)=>{
    console.log("procesando...");
let nombre_productos=datos.map(function(item){return item.producto;});
if(nombre_productos.length===0){
    n(new Error("no hay datos para mostar"))
}else{
    setTimeout(()=>(y(nombre_productos)),1500);
}
})
};
//get().then(Response=>console.log(Response))
//.catch(error=>console.log(error));
const presentar=async()=>{
    try{
        const objeto=await get();
        console.log(objeto);
    }catch(error){
        console.log(error);
    }
}
presentar();

//otra promesa
function celular(nombre,modelo,anio){
    this.nombre=nombre;
    this.modelo=modelo;
    this.anio=anio;
}
const modelos=new celular("samsumg","j1",2012);
const modelo2=new celular("xiaomi","mi a3",2019);
const model_cell=[modelos,modelo2];
const mape=model_cell.map(item=> item.nombre);
//console.log(mape);
const presentalo=()=>{
    return new Promise((y,n)=>{if(model_cell.length===0){new Error(n("no hay datos, UPS!"));}else{setTimeout(()=>y(model_cell),3500)}})
};
const asinc_2=async()=>{try {
    const presentelo=await presentalo();
    console.log(presentelo);
} catch (error) {
    console.log(error);
}
    
}
asinc_2();