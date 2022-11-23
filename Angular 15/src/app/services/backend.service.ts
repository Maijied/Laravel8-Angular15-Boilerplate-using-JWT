import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  httpFormDataHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http:HttpClient) {
  }
  signup(data:any){
    return this.http.post('http://127.0.0.1:8000/api/signup', data, this.httpFormDataHeader);
  }
  login(data:any){
    return this.http.post('http://127.0.0.1:8000/api/login', data, this.httpFormDataHeader);
  }
}
