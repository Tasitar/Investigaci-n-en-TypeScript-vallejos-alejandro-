## Tema 1: ¿Qué es TypeScript?
● ¿Qué es TypeScript y quién lo desarrolla?

    TypeScript es un superconjunto de JavaScript desarrollado por Microsoft que agrega tipado estático opcional.


● ¿Qué diferencias tiene con JavaScript?
    javascrip no tene tipado. TypeScript tiene su propio compilador. en typeScript los errores se ven mas facil    


● ¿Qué ventajas ofrece?
    1.detecta errores mientras se escribe el codigo, antes de ejecutarlo
    2. mejora el autoconpletado y la refectorizacion en el editor
    3. Hace el codigo mas mantenible y escalable 
    4. los tipos funcionan documentacion del propio codigo

● ¿Cuál es su versión actual?
    su version actual es TypeScript 7 SALIDA EL 8 DE JULIO DE 2026. es una reescritura completa dek compilador Go

## Tema 2: Crear y ejecutar un proyecto
● ¿Cómo se instala TypeScript en un proyecto?
    de forma local con [ npm i -D typescript ]

    de forma global con [ npm install -g typescript ]


● ¿Para qué sirve el archivo tsconfig.json?
    es el archivo de configutacion del proyecto. le indica a TypeScript que archivos forman el proyecto, que tan estricto debe ser a verificar tipos,como generar el JavaScript

    tambien define que la carpeta es un proyecto TS. Sin tsconfig.json, tsc no sabe que compilar y muestra 

● ¿Qué hace el comando tsc?
    el compilador tsc analiza el programa completo y verifica los tipos 


● ¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?

    tsc: Verifica tipos y genera JavaScript
    tsx: Genera JavaScriot sin verificar tipos 
    node: Solo borra las anotaciones de tipo

## Tema 3: Tipos básicos

● ¿Qué son los tipos string, number y boolean?
    estos son tipos primitivos 

● ¿Cómo se declara un array con tipo?
    se declara asi :  let numero: number[] = [1,2,3] o
                      let nombres: string[] = ["ana","Luis"]
    se le pone el tipo que es despues del nombre de la variable


● ¿Qué es un tipo unión?
    los tipos unionp permiten que una variable o funcion acepte multiples tipos de datos
    https://devschool.es/typescript/uniones-y-alias/


● ¿Por qué se recomienda evitar any?
    no se recomineda por que el any desactiva la verificacion de tipo


## Tema 4: Funciones
● ¿Cómo se indican los tipos de los parámetros?

    se tipan con strict, siendo obligatorio o si no da error


● ¿Cómo se indica el tipo de retorno?

    se le indica el tipo antes de abrir las llaves

    function sumar(a: number, b: number): number {
    return a + b;
}


● ¿Qué es un parámetro opcional?

    per,otem definir argumentos que pueden o no ser proporcionados al llamar a una funcion

https://www.luisllamas.es/typescript-parametros-funciones/

● ¿Qué es un parámetro por defecto?
    son valores predeterminado que se asignan a un parametro de una funcion cuando no se proporciona un valo al llamar a la funcion


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

    https://www.freecodecamp.org/espanol/news/como-funcionan-los-tipos-en-typescript-explicado-con-ejemplos-en-javasscript-y-typescript/

● ¿Cómo se declara una propiedad opcional?

    
    interface Usuario {
        id: number;
        nombre: string;
        email: string;
        edad?: number; // asi haces una propiedad opcional
        readonly createdAt: Date; // Solo lectura
}


● ¿Cuándo conviene usar cada uno?

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