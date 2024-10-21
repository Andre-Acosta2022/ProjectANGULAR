export class Solicitud {
    id: number;
    fecha: string;   // Formato de fecha, por ejemplo: "YYYY-MM-DD"
    descripcion: string;
    estado: string;  // Por ejemplo: 'Pendiente', 'Aprobado', 'Rechazado'
    tipo: string;    // Tipo de solicitud, por ejemplo: 'Prácticas', 'Servicio'
    solicitante: string;  // Nombre de quien realiza la solicitud
  
    constructor(
      id: number = 0,
      fecha: string = '',
      descripcion: string = '',
      estado: string = 'Pendiente',
      tipo: string = '',
      solicitante: string = ''
    ) {
      this.id = id;
      this.fecha = fecha;
      this.descripcion = descripcion;
      this.estado = estado;
      this.tipo = tipo;
      this.solicitante = solicitante;
    }
  }