import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../shared/models/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiPath: string = 'http://localhost:3000';
  constructor(private http: HttpClient, public router: Router) { }

  Register(login: LoginModel){
    return this.http.post(this.apiPath+"/User/Create", login, { 'responseType': 'json'}).pipe();
  }

  Login(login: LoginModel){
    return this.http.post(this.apiPath+"/Login", login, { 'responseType': 'text'}).pipe();
  }
}
