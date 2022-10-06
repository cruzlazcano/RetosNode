// 5.- Crea una subclase de Electrodomestico llamada Lavadora 
//     con las siguientes características:
//     a. Su atributo es carga(kg de ropa), además de los 
//        atributos heredados.
//     b. Crea el método precioFinal(). Este se calcula
//        multiplicando el consumoEnergetico por la carga.

class Electrodomestico{
    constructor(precio, color, capacidad) {
        this.precio = precio;
        this.color = color;
        this.consumo = 100;
        this.capacidad = capacidad;
    }
}

class Lavadora extends Electrodomestico{
    constructor(precio, color, capacidad,carga){
        super(precio, color, capacidad);
        this.carga = carga;
    }
    precioFinal(){
       let total = this.consumo * this.carga;
       return total;
    }
}
let objeto2 = new Lavadora(150, "Azul",900, 5);
console.log("Precio final",objeto2.precioFinal());