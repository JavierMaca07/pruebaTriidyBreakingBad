import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Personaje, formularioPersonaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  baseUrl: string = environment.baseUrl;

  listadoPersonajes$ = new Subject<Personaje[]>();
  
  constructor(private http: HttpClient) { }

  getPersonajePorBusqueda(parametros: formularioPersonaje): Observable<Personaje[]>{

    let params = new HttpParams();
    
    const { name, category, status } = parametros; 
      params = params 
        .set('name', name??'')
        .set('nickname', name??'')
        .set('category', category??'')
        .set('status', status??'')
  
    return this.http.get<Personaje[]>(`${this.baseUrl}characters?`, { params })
  }
  
}
