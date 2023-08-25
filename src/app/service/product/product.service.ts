//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { catchError, Observable, of } from 'rxjs';
import { Product } from '../../model/Product';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
   storage = window.localStorage;
   apiUrl = 'http://localhost:4200/assets/data.json';
   getProductUrl = 'http://localhost:4200/product-page';

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  
  addProduct(product: Product[]): void {
    this.storage.setItem('products', JSON.stringify(product));
  }

  getProductByID(id: number): Observable<Product> {
    const url = `${this.getProductUrl}/${id}`;
    return this.http
      .get<Product>(url)
      .pipe(catchError(this.handleError<Product>(`getProduct id=${id}`)));
  }
}
