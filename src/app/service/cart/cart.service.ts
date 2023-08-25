import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  storage = window.localStorage;
  cartProductList!: Product[];
  selectedItem = '1';

  constructor(private productService: ProductService){}

  getCartProduct() {
    const getProduct = this.storage.getItem('products');
    return getProduct ? JSON.parse(getProduct) : [];
  }
  
  clearCart(): void {
    this.storage.clear();
  }

  calculateCount() {
    const cart : Product[] = this.getCartProduct();
    let sum = 0;

    for(let i = 0; i < cart.length; i++){
      sum++;
    }
    const ele = document.getElementById('cartAmount') as HTMLElement;
    ele.innerHTML = sum.toString();
  }

}
