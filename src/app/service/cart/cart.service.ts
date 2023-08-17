import { Injectable } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { CartItem } from 'src/app/model/CartItem';
import { Product } from 'src/app/model/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  storage = window.localStorage;

  private cart: Cart = new Cart();

  addToCart(product: Product): void {
    const cartItem = this.cart.items.find(
      (item) => item.product.id === product.id,
    );
    if (cartItem) {
      this.changeQuantity(product.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(product));
  }

  removeFromCart(productId: number): void {
    this.cart.items = this.cart.items.filter(
      (item) => item.product.id != productId,
    );
  }

  changeQuantity(productId: number, quantity: number) {
    const cartItem = this.cart.items.find(
      (item) => item.product.id === productId,
    );
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCartProduct() {
    const getProduct = this.storage.getItem('products');
    return getProduct ? JSON.parse(getProduct) : [];
  }
  
  clearCart(): void {
    this.storage.clear();
  }

  // getCartProduct(): Cart {
  //   return this.cart;
  // }
}
