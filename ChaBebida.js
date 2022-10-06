// 3.- Crear una clase Bebida que herede a dos clases Cerveza 
//     y Refresco. Ambas clases deben tener la propiedad 
//     cantidad (ml). La clase Refresco debe tener el atributo
//     azucar(g) y la clase Cerveza debe el atributo 
//     porcentajeAlcohol

class Bebida{
    constructor(cantidad){
        this.cantidad =  cantidad;
    } 
}
class Cerveza extends Bebida{
    constructor(cantidad, porcentajeAlcohol){
        super(cantidad);
        this.porcentajeAlcohol = porcentajeAlcohol;
    }
}
class Refresco extends Bebida{
    constructor(cantidad, azucar){
        super(cantidad);
        this.azucar = azucar;
    }
}

