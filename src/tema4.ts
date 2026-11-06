function presentar(nombre: string, edad?: number): string {
  if (edad !== undefined) {
    return `Hola, soy ${nombre} y tengo ${edad} años`;
  }

  return `Hola, soy ${nombre}`;
}

function sumar(a: number, b: number = 0): number {
  return a + b;
}

console.log(presentar("Nacho", 23));
console.log(presentar("alejandro"));
console.log(sumar(4, 3));
console.log(sumar(4));