## Tema 1: ¿Qué es TypeScript?
● ¿Qué es TypeScript y quién lo desarrolla?

    TypeScript es un lenguaje de programacion de codigo abierto y un superconjunto de JavaScript desarrollado por Microsoft y diseñado por Anders Heijlsberg que agrega tipado estático y objetos basados en clases.


● ¿Qué diferencias tiene con JavaScript?
    javascrip no tene tipado
    TypeScript tiene su propio transpilador 
    en typeScript los errores se ven mas facil  


● ¿Qué ventajas ofrece?
    1.detecta errores mientras se escribe el codigo, antes de ejecutarlo
    2. mejora el autocompletado y la refectorizacion en el editor
    3. Hace el codigo mas mantenible y escalable 
    4. TS se compila a javascript estandar lo que garantiza que el codigo pueda ejecutarse en cualquiera navegador o entorno compatible con JS

● ¿Cuál es su versión actual?
    su version actual es TypeScript 7 SALIDA EL 8 DE JULIO DE 2026. es una reescritura completa del compilador Go

## Tema 2: Crear y ejecutar un proyecto
● ¿Cómo se instala TypeScript en un proyecto?
    de forma local con [ npm i -D typescript ]

    de forma global con [ npm install -g typescript ]


● ¿Para qué sirve el archivo tsconfig.json?
    es el archivo de configuracion del proyecto. le indica a TypeScript que archivos forman el proyecto, que tan estricto debe ser a verificar tipos,como generar el JavaScript

    tambien define que la carpeta es un proyecto TS. Sin tsconfig.json, tsc no sabe que compilar

● ¿Qué hace el comando tsc?
    el compilador tsc analiza el programa completo, verifica los tipos y compila el archivo TS a JS 


● ¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?

    tsc: Verifica tipos y compila .ts a .js
    tsx: transpila JavaScrit sin verificar tipos, elimina los tipos con esbuild, no verifica y acepta casi toda la sintaxis de TypeScript
    node: Solo borra las anotaciones de tipo, no verifica y rechaza sintaxis no borrable como enum

## Tema 3: Tipos básicos

● ¿Qué son los tipos string, number y boolean?
    estos son tipos primitivos 

● ¿Cómo se declara un array con tipo?
    se declara asi :  let numero: number[] = [1,2,3] o
                      let nombres: string[] = ["ana","Luis"]
    se le pone el tipo que es despues del nombre de la variable


● ¿Qué es un tipo unión?
    los tipos unionp permiten que una variable o funcion acepte multiples tipos de datos se declaran utilizando el operador ( | ) entre los tipos que se quiere co


● ¿Por qué se recomienda evitar any?
    no se recomineda por que el any desactiva la verificacion de tipo


## Tema 4: Funciones
● ¿Cómo se indican los tipos de los parámetros?

Los tipos de los parametros se indican despues del nombrem usando dos puntos 
ejemplo  nombre: string, edad : numnber 

● ¿Cómo se indica el tipo de retorno?

    se le indica el tipo antes de abrir las llaves

    function sumar(a: number, b: number): number {
    return a + b;
}
console.log(sumar(3, 5))



● ¿Qué es un parámetro opcional?

    es para definir argumentos que pueden o no ser proporcionados al llamar a una funcion
    ejemplo

se le agrega el signo de interrogacion despues del nombre del parametro

function saludar(nombre: string, edad?: number): void {
    if (edad) {
        console.log(`Hola ${nombre}, tienes ${edad} años.`);
    } else {
        console.log(`Hola ${nombre}.`);
    }
}


● ¿Qué es un parámetro por defecto?
    son valores predeterminado que se asignan a un parametro de una funcion cuando no se proporciona un valo al llamar a la funcion

para agregar un parametro por defecto se utiliza el signo ( = ) despues del tipo de dato

function saludar(nombre: string, edad: number = 18): void {
    console.log(`Hola ${nombre}, tienes ${edad} años.`);
}





## Tema 5: Interfaces y type
● ¿Qué es una interfaz y para qué sirve?

    permite definir la estructura y el comportamiento de un objeto
    se declaran usando la palabra interface

    interface Persona {
         nombre: string;
         edad: number;
         saludar(): void;
}

● ¿Qué es un type?
    es una clasificaion que espeficica los posibles valores que puede tener una variable 


● ¿Cómo se declara una propiedad opcional?

    
    interface Usuario {
        id: number;
        nombre: string;
        email: string;
        edad?: number; // asi haces una propiedad opcional con el signo ?
        readonly createdAt: Date; // Solo lectura
}


● ¿Cuándo conviene usar cada uno?

    conviene user INTERFACE para describir la estructura de un objeto o clases especialmente si se espera ampliarla o extenderla 
    conviene usar TYPE cuando se necesitan otros tipos, como uniones de valores, alias para tipos primitivos o combinaciones de tipos para describir objetos simples 


## Tema 6: Enums y tipos literales
● ¿Qué es un enum?

     es una caracteristica que permite definir un conjunto de valores constantes bajo un mismo nombre

    enum NombreEnum {
    VALOR1,
    VALOR2,
    VALOR3
}

● ¿Qué es un tipo literal?

    son utilizados para definir variables con valores especificos y prefijados

    type Direccion = "norte" | "sur" | "este" | "oeste";

let direccion: Direccion;

direccion = "norte"; // Correcto
direccion = "sur";   // Correcto
// direccion = "noreste"; // Error: El tipo '"noreste"' no se puede asignar al tipo 'Direccion'.

● ¿En qué se parecen y en qué se diferencian?

se parecen en que ambos limitan una variable a valores especificos y ayudan a detectar asignaciones incorrectas

● ¿En qué situaciones se puede usar cada uno?

un enum se puede usar cuando tengas varas opciones con nombre y quieras agreparlas ejem, los estados de un pedido : pendiente, Enviado o Entregado

enum EstadoPedido {
  Pendiente = "pendiente",
  Enviado = "enviado",
  Entregado = "entregado",
}

let estado: EstadoPedido = EstadoPedido.Pendiente;

estado = EstadoPedido.Enviado; // Correcto
// estado = "cancelado";       // Error



El tipo literal solo cuando quieras permitir ciertos valores ejem. una direccion sea Norte, Sur, Este, Oeste

type Direccion = "norte" | "sur" | "este" | "oeste";

let direccion: Direccion = "norte";

direccion = "sur";       // Correcto
// direccion = "noreste"; // Error

### BIBLIOGRAFIA

## tema 1
https://es.wikipedia.org/wiki/TypeScript
https://www.dongee.com/tutoriales/ventajas-y-desventajas-de-typescript/

## tema 2
https://coddy.tech/docs/es/typescript/run-typescript

## tema 3
https://devschool.es/typescript/uniones-y-alias/

## tema 4
https://www.luisllamas.es/typescript-parametros-funciones/


## tema 5
    https://www.freecodecamp.org/espanol/news/como-funcionan-los-tipos-en-typescript-explicado-con-ejemplos-en-javasscript-y-typescript/