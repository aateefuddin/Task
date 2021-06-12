import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  GetAllDoctors(){
    return this.http.get('/assets/json/data.json',{responseType:"json"})
  }
}
