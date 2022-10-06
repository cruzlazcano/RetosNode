// 2.- Crear la clase construcción que hereda a otras dos 
//     clases "casa" y "edificio". 
//     a. Sus atributos son: numPuertas, numVentanas, numPisos,
//        direccion, altura, largo y ancho del terreno.
//     b. Cada uno tiene un método que regresa los metros 
//        cuadrados
//     c. Un método debe regresar la direccion
//     d. Un método debe permitir modificar la direccion
//     e. Buscar la mejor manera de aprovechar la herencia

class Construccion{
    constructor(numPuertas, numVentanas, numPisos,direccion, altura, largo, ancho){
        this.numPuertas = numPuertas;
        this.numVentanas = numVentanas;
        this.numPisos = numPisos;
        this.direccion = direccion;
        this.altura = altura;
        this.largo = largo;
        this.ancho = ancho;
    }
    m2(){
        let metros = this.largo * this.ancho;
        return metros + " metros cuadrados, de "+this.tipo;
    }
    dir(){
        return this.direccion;
    }
    mD(nuevaDireccion){
        this.direccion = nuevaDireccion;
        return this.direccion;
    }
}
class Casa extends Construccion{
    constructor(numPuertas, numVentanas, numPisos,direccion, altura, largo, ancho, tipo){
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho);
        this.tipo = tipo;
    }
  
}
class Edificio extends Construccion{
    constructor(numPuertas, numVentanas, numPisos,direccion, altura, largo, ancho, tipo){
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho);
        this.tipo = tipo;
    }
}

let cCasa = new Casa(4,3,2,"Calle 4, No.23", 5, 15,10,"Casa");
let cEdificio = new Edificio(4,3,4,"Manzana 23", 15, 10,10,"Edificio");

console.log(cCasa.m2());
console.log(cCasa.dir());
cCasa.mD("Calle 19 mz4 lt7 n.5");//Se asigna la nueva dirección 
console.log(cCasa.dir());//Se imprime la nueva dirección
console.log("---------------------------------------");
console.log(cEdificio.m2());
console.log(cEdificio.dir());
cEdificio.mD("Av.48Nte con Flor mz.10 dpto.105");//Se asigna la nueva dirección 
console.log(cEdificio.dir());//Se imprime la nueva dirección