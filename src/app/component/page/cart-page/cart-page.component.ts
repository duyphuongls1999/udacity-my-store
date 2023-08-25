import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  products: Product[] = [];
  @Output() userInfo = new EventEmitter();
  totalPrice: number | string = '';
  productCounts: string[] = ['1', '2', '3', '4', '5'];
  selectedItem = '';
  constructor(private cartService: CartService, private route: Router) {}

  ngOnInit(): void {
    this.products = this.cartService.getCartProduct();
    this.calculateTotal();
  }

  onSubmit(value: any) {
    this.cartService.clearCart();
    this.cartService.calculateCount();
    this.route.navigate([`checkout-page/${value.fullName}/${this.totalPrice}`]);
  }

  refresh(): void {
    window.location.reload();
  }

  selectChange(value: string, product: Product) {
    const index = this.products.indexOf(product);
    this.products[index] = product;
    this.products[index].amount = value;
    localStorage.setItem('products', JSON.stringify(this.products));
    this.calculateTotal();
    this.refresh();
  }

  calculateTotal() {
    this.totalPrice = this.products.reduce((acc, item) => {
      this.totalPrice = parseFloat(
        (acc + item.price * Number(item.amount)).toFixed(2)
      );
      return this.totalPrice;
    }, 0);
  }

  deletedItem(id: number) {
    const storageProducts = this.cartService.getCartProduct();
    const product = storageProducts.filter(
      (product: Product) => product.id === id
    );
    const products = storageProducts.filter(
      (product: Product) => product.id !== id
    );
    const message = `${product[0].name} has been removed to your cart.`;
    alert(message);
    window.localStorage.clear();
    localStorage.setItem('products', JSON.stringify(products));
    this.refresh();
    this.calculateTotal();
  }
}
