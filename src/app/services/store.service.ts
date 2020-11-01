import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Store } from "../models/Store";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  API = "http://localhost:8080/api/v1/negocio/";

  constructor(private http: HttpClient) {}

  getStores(idEncargado: number) {
    return this.http.get(`${this.API}negocios/${idEncargado}`);
  }

  addStore(store: Store) {
    return this.http.post(`${this.API}`, store);
  }
}
