const EMPRESA="Logistica Global S.A.";

let enviosDelDia = 0;

const saludarCliente= (nombre) => `Bienvenido a ${EMPRESA}, estimado/a ${nombre}`;

console.log(saludarCliente('Juan Pablo'));


const calcularCostosEnvio = (peso, tarifa=10) => peso * tarifa;

console.log(`Costos de envío estándar: $${calcularCostosEnvio(5)}`);
console.log(`Costos de envío especial: $${calcularCostosEnvio(5,20)}`);

const registrarPaquetes= (...ids)=> {
    console.log(` Registrado ${ids.length} paquetes: ${ids.join(', ')}`);
    enviosDelDia +=  ids.length
    console.log(`Total del envios del dia : ${enviosDelDia}`);
}
registrarPaquetes(105,109,115,25,850,36,37,41);
registrarPaquetes(99,78,16,3,78);

const nuevosPaquetes = [105,109,115,25,850,36,37,41];

const todosLosPaquetes = [...nuevosPaquetes,99,78,16,3,78];
console.log(`todos los paquetes: ${todosLosPaquetes}`);

class Envio {
    #codigoSeguridad;
    constructor(id,destino,codigo){
        this.id=id;
        this.destino=destino;
        if(!this.#verificarCodigo(codigo)){
            throw new Error("Codigo inválido debe tener la siguiente estructura SEC###");            
        }

        this.#codigoSeguridad =codigo;
    }

    getDetalles(){     
        const {id,destino}=this;
        return {id,destino};
        //return {"id":this.id, destino: this.destino};
    }
    #verificarCodigo(codigo){
            
          const regex= /^SEC\d{3}$/; // SEC###
          
          return regex.test(codigo);
    }
}
//let envio;
// try {
//     envio= new Envio(1,'CHILE',"SEC1");
// }catch(ex){
//   console.log("Error de codigo");    
// }
// let envio= new Envio(1,'CHILE',"SEC100");
// console.log(envio.getDetalles());
// const {id,destino}=envio;
// console.log(id,destino);

//console.log("Envio creado:",envio);


class EnvioExpress extends Envio {
    constructor(id,destino,codigo,prioridad){
        super(id,destino,codigo);
        this.prioridad=prioridad;
    }
    getDetalles(){
        const detallesBase= super.getDetalles();
        return {
            ...detallesBase,
            prioridad:this.prioridad,
            tipo:"Express"
        }
    }
}

let envio= new Envio(1,'CHILE',"SEC001");
let envioExpress= new EnvioExpress(2,"Peru",'SEC002',1);

console.log(envio.getDetalles());
console.log(envioExpress.getDetalles());

let mapEnvios= new Map();
mapEnvios.set(envio.id,envio);
mapEnvios.set(envioExpress.id,envioExpress);

console.log(mapEnvios);
console.log(mapEnvios.get(1));
console.log(mapEnvios.get(2));


let destinosPosible= new Set();

destinosPosible.add("Chile");
destinosPosible.add("Chile");
destinosPosible.add("Peru");
destinosPosible.add("Argentina");


const buscarPaquete = (id) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(id>0){
              resolve({id, status:"En Transito"});
            }else{
                reject( new Error(`ID ${id} es Inválido`))
            }
        }
        ,2000);
    });
};



const procesarPedido = async (idPedido) =>{
    console.log(`Buscando pedido ${idPedido}`);
    try {
        const resultado = await buscarPaquete(idPedido);
        console.log(`Estado del pedido id ${idPedido}: ${resultado.status}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);        
    }
}

// forma sin syn y await de ejecutar el metodo
// buscarPaquete(2)
// .then((resultado)=>console.log(resultado))
// .catch((err)=> console.log(err));

procesarPedido(1);
procesarPedido(-10);