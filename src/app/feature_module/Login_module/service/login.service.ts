import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../models/ILogin.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  basePath = "http://localhost:3000"

constructor(private http: HttpClient) { }

login(): Observable<any>{
  return this.http.get(`${this.basePath}/login`, { observe: 'response'});
}

}
