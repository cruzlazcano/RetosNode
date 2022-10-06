// 4.- Crea una superclase llamada Electrodoméstico con las 
//     siguientes características:
//     a. Sus atributos son precio, color, consumoEnergetico
//        y capacidad (peso máximo)
//     b. El constructor solo debe pedir precio, color 
//        y capacidad. 
//     c. consumoEnergetico debe iniciar con valor de 100

class Electrodomestico{
    constructor(precio, color, capacidad) {
        this.precio = precio;
        this.color = color;
        this.consumo = 100;
        this.capacidad = capacidad;
    }
}
let objeto = new Electrodomestico(150,"azul",900);
console.log(objeto);
