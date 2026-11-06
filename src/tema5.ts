interface Usuario {
  nombre: string;
  edad: number;
}

type Rol = "administrador" | "invitado";

const usuario: Usuario = {
  nombre: "Camila",
  edad: 22,
};

const rol: Rol = "invitado";

console.log(usuario);
console.log("Rol:", rol);