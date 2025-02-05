import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultarService {

  private apiUrl = 'http://localhost:5000/api/buscar_todas'; // URL de la API
  constructor(private http: HttpClient) { }
  consultarSentimiento(query: string): Observable<any> {
    const body = { query }; // Enviar el candidato como JSON
    return this.http.post<any>(this.apiUrl, body);
  }
}
