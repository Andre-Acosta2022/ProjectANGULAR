import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from '../models/Solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
 private apiUrl='http://localhost:8080/api/Solicitud';
  constructor(private http: HttpClient) { }

  getSolicitud():Observable<Solicitud[]>{
    return this.http.get<Solicitud[]>(this.apiUrl);
  }
}