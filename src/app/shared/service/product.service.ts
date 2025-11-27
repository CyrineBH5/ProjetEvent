import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';

@Injectable({
  providedIn: 'root' //utilisation de service dans toute l'application
})
export class ProductService {

  //httpClient:
  constructor(private httpClient: HttpClient) {}
  //Observable :
    getAllproducts() : Observable<Product[]> {
      return this.httpClient.get<Product[]>('http://localhost:3000/products');
    }
    getProductById(id: number) : Observable<Product> {
      return this.httpClient.get<Product>('http://localhost:3000/products/' + id);
    }
    updateProduct(product: Product) : Observable<Product> {
      return this.httpClient.put<Product>('http://localhost:3000/products/' + product.id, product);
    }
    deleteProduct(id: number) : Observable<void> {
      return this.httpClient.delete<void>('http://localhost:3000/products/' + id);
    }
    addProduct(product: Product) : Observable<Product> {
      return this.httpClient.post<Product>('http://localhost:3000/products/add-product', product);
    }

}
