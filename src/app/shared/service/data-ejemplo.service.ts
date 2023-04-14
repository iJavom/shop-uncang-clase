import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataEjemploService {
  //los Services son aquellas clases que nos permiten obtener, gestionar , manipular informacion para hacer nuestra programacion mas modular...
  //Ya sea mediante APIS, Cache, o transformaciones en el mismo service
  private apiUrl = "https://pokeapi.co/api/v2/pokemon/"

  constructor() { }

  obtenerPikachu(){
    //Futuramente llamara a pikachu;
  }
}
