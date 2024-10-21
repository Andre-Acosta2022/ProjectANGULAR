export class Empresa {
    id: number;
    nombre: string;       // Nombre de la empresa
    direccion: string;    // Dirección física de la empresa
    telefono: string;     // Número de contacto de la empresa
    email: string;        // Correo electrónico de contacto
    rubro: string;        // Rubro o sector al que pertenece la empresa
    estado: string;       // Estado de la empresa, por ejemplo: 'Activo', 'Inactivo'
  
    constructor(
      id: number = 0,
      nombre: string = '',
      direccion: string = '',
      telefono: string = '',
      email: string = '',
      rubro: string = '',
      estado: string = 'Activo'  // Estado predeterminado como 'Activo'
    ) {
      this.id = id;
      this.nombre = nombre;
      this.direccion = direccion;
      this.telefono = telefono;
      this.email = email;
      this.rubro = rubro;
      this.estado = estado;
    }
  }