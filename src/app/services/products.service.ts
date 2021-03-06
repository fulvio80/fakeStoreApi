import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Product } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(environment.pathApi + 'products/');
  }

  getSingleProduct(id: number) {
    return this.http.get<Product[]>(environment.pathApi + 'products/'+id)
  }
}

