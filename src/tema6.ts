enum EstadoPedido {
  Pendiente = "pendiente",
  Enviado = "enviado",
  Entregado = "entregado",
}

type Direccion = "norte" | "sur" | "este" | "oeste";

const estado: EstadoPedido = EstadoPedido.Enviado;
const direccion: Direccion = "norte";

console.log("Estado del pedido:", estado);
console.log("Dirección:", direccion);