import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../models/Usuario";

@Injectable({
  providedIn: "root",
})
export class UserService {
  API = "http://localhost:8080/api/v1/";
  user: Usuario;

  constructor(private http: HttpClient) {}

  authenticate(user: Usuario) {
    return this.http.post(`${this.API}usuario/authenticate`, user);
  }

  signUp(user: Usuario) {
    return this.http.post(`${this.API}usuario`, user);
  }

  getUser(id:string){
    return this.http.get(`${this.API}usuario/${id}`)
  }

  update(user:Usuario){
    return this.http.put(`${this.API}usuario`, user);
  }
}
