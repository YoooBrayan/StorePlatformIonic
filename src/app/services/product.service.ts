import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  API = "http://localhost:8080/api/v1/producto/";

  getProducts(idStore: string){
    return this.http.get(`${this.API}${idStore}`);
  }

  addProduct(product:Product){
    return this.http.post(`${this.API}`, product);
  }
}
