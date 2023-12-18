import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry,catchError } from "rxjs/operators";
import { Observable } from 'rxjs';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
}

export class BesoccerApiService {
  private baseUrl = 'https://apiclient.besoccerapps.com/scripts/api/api.php';
  private apiKey = 'TU_API_KEY'; // Reemplaza 'TU_API_KEY' con tu clave de API

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    const url = `${this.baseUrl}?key=${this.apiKey}&tz=Europe/Madrid&req=categories&filter=my_leagues&format=json`;
    return this.http.get<any>(url);
  }
}
