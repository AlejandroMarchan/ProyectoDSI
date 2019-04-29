export interface Usuario {
  username?: string,
  contrasena: string,
  nombre: string,
  apellidos: string,
  bonos: number,
  dinero: number,
  telefono: number,
  tipo: string //admin, comun, trabajador
}
