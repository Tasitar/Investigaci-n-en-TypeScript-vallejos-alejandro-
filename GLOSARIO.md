### 1: SUPERCONJUNTO:
es algo que contiene todo lo de otro conjunto y ademas agrega elementos
como TypeScrip es un superconjunto de JavaScript por que agrega los tipos ára detectar errores antes de ejecutar

### 2: TIPOS PRIMITIVOS
son los tipos de datosmas basicos en TypeScript: string number boolean

### 3: ARGUMENTO
son los valores qye le pasas a una funcion cuando la llamas
 ejem 

 function saludar(nombre: string) {
  console.log("Hola, " + nombre);
}

saludar("Ana") esto es el argumento

### 4: CLASE
molde para crear objetos que comparten caracteristicas y acciones 

ejemplo de una clase:

class Auto {
  marca: string;

  constructor(marca: string) {
    this.marca = marca;
  }

  arrancar(): string {
    return `El auto ${this.marca} arrancó`;
  }
}

const miAuto = new Auto("Toyota");
console.log(miAuto.arrancar());

Resultado: "El auto Toyota arrancó"




### 5: HERENCIA
mecanismo por el cual una clase puede reutilizar caracteristicas de otra

ejemplo de herencia 

class Animal {
  constructor(public nombre: string) {}

  presentarse(): string {
    return `Soy ${this.nombre}`;
  }
}

class Perro extends Animal {
  ladrar(): string {
    return "¡Guau!";
  }
}

const miPerro = new Perro("Toby");
console.log(miPerro.presentarse());
console.log(miPerro.ladrar());




### 6: GENERICO
forma de crear funciones o estructuras que pueden trabajar con distintos tipos de datos

### 7: INFERENCIA DE TIPOS
Es cuando TypeScript deduce automaticamente el tipo de una variable segun el valor asignado

### 8: TRANSPILAR
es convertir codigo de un lenaguaje o version a otro manteniendo su proposito.
En TS se tranpila el codigo a JS para que pueda ejecutarse en un entorno compatible con JS  como con TSC que transpila .ts y genera .js

### 9: COMPILAR
es procesar el codigo de un programa para transformarlo a un formato que pueda ejecutrarse 

### 10: POO programacion orientada a objetos
es una forma de organizar el codigo usando objetos que reunen datos y acciones