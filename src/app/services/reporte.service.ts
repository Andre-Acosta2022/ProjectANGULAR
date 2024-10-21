import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reporte} from '../models/reporte';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
 private apiUrl='http://localhost:8080/api/Reporte';
  constructor(private http: HttpClient) { }

  getSolicitud():Observable<Reporte[]>{
    return this.http.get<Reporte[]>(this.apiUrl);
  }
}