import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../../models/Solicitud';
interface TableRow {
  id: string;
  empresa: string;
  email: string;
  fecha: string;
  direccion: string;
  ruc: string;
  linea: string;
  representante: string;
  estado: string;
}
@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports: [],
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.css'
})
export class SolicitudComponent implements OnInit {
  tableData: TableRow[] = [
    { id: '001', empresa: 'SeptimusSystems', email: 'example@email.com', fecha: '14/APR/2020', direccion: 'Calle-Urbanización', ruc: '1234567890', linea: 'Redes', representante: 'Justin Septimus', estado: 'Pendiente' },
    { id: '001', empresa: 'SeptimusSystems', email: 'example@email.com', fecha: '14/APR/2020', direccion: 'Calle-Urbanización', ruc: '1234567890', linea: 'Redes', representante: 'Justin Septimus', estado: 'Rechazado' },
    { id: '001', empresa: 'SeptimusSystems', email: 'example@email.com', fecha: '14/APR/2020', direccion: 'Calle-Urbanización', ruc: '1234567890', linea: 'Redes', representante: 'Justin Septimus', estado: 'Aceptado' },
    { id: '001', empresa: 'SeptimusSystems', email: 'example@email.com', fecha: '14/APR/2020', direccion: 'Calle-Urbanización', ruc: '1234567890', linea: 'Redes', representante: 'Justin Septimus', estado: 'Rechazado' },
    { id: '001', empresa: 'SeptimusSystems', email: 'example@email.com', fecha: '14/APR/2020', direccion: 'Calle-Urbanización', ruc: '1234567890', linea: 'Redes', representante: 'Justin Septimus', estado: 'Aceptado' }
  ];

  constructor() { }

  ngOnInit(): void { }

  crearSolicitud() {
    // Implement the logic for creating a new request
    console.log('Crear solicitud clicked');
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'pendiente': return 'status-warning';
      case 'rechazado': return 'status-danger';
      case 'aceptado': return 'status-success';
      default: return '';
    }
  }
}
