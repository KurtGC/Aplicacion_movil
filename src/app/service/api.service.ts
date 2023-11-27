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
