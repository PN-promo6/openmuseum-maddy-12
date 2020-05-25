import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Museum } from '../models/museum/museum';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  //--------Methodes

  //récupère les musées

  public fetchMuseums(): Observable<Museum[]> {
    let observableData: Observable<Museum[]> = this.httpClient.get<Museum[]>('http://localhost:3000/museums');
    return observableData;
  }
  //Methode qui récupère les museums par leur ID

  public fetchMuseumById(id: string): Observable<any> {
    let obsDataMuseum: Observable<any> = this.httpClient.get('http://localhost:3000/museums/' + id);
    return obsDataMuseum;
  }
}
