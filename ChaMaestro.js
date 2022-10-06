// 1. Hacer superclase Maestro y subclases Maestro de Física y 
//    Maestro de Música y a cada uno asignarle su materia y 
//    calcular su promedio de grupo a partir de calificaciones   
//    (puedes usar arreglos). El maestro de física tiene un 
//    atributo "antigüedad" que guarda un valor numérico, 
//    mientras que el maestro de música tiene un atributo "edad"
//    también guardando un valor numérico.
class Maestro {
    constructor(materia) {
      this.materia = materia;
    }
    calcularPromedio(...args) {
      let total = 0;
      let promedio = 0;
      for (let index = 0; index < args.length; index++) {
        total = total + args[index];
      }
      promedio = total / args.length;
      if (promedio >= 60){
        return "El promedio de la Calificación de la materia de " + this.materia +" con un promedio de: "+ 
        promedio +" Felicidades has reprobada la materia";

      }else{
        return "El promedio de la Calificación de la materia de " + this.materia +" con un promedio de: "+
        promedio +" desfortunadamente has reprobada la materia";

      }
    }
  }
  
  class Fisica extends Maestro {
    constructor(materia, antiguedad) {
      super(materia);
      this.antiguedad = antiguedad;
    }
  }
  
  class Musica extends Maestro {
    constructor(materia, edad) {
      super(materia);
      this.edad = edad;
    }
  }
  
  let profesorM = new Musica("Guitarra", 60);
  let profesorF = new Fisica("Termodinamica", 5);
  console.log(profesorM);
  console.log(profesorF);
  console.log(profesorF.calcularPromedio(20, 50, 90));
  console.log(profesorM.calcularPromedio(58, 80, 100));