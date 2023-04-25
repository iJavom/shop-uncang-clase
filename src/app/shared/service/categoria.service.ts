import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError , throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  apiUrl = environment.apiUrl;

  constructor( 
    private http: HttpClient
  ) { }

  obtenerCategorias(limitante?: string){
    return this.http.get<string[]>(`${this.apiUrl}products/categories`);
  }


}
