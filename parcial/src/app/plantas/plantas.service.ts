import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Planta } from './planta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {

  private apiUrl: string = environment.baseUrl
  constructor(private http: HttpClient) { }

  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl);
  }
}
