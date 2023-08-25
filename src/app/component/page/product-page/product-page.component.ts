import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/service/cart/cart.service';
import { ProductService } from 'src/app/service/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  @Input() productItem!: Product;
  private ngUnsubscribe = new Subject<void>();
  productCounts: string[] = ['1', '2', '3', '4', '5'];
  selectedItem = '1';
  products!: Product[];
  // product!: Product;
  id!: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });
    this.productService
      .getAllProduct()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (res) => {
          this.products = res;
          this.productItem = this.getProductDetails(this.id);
        },
        error: (err) => console.log(err),
      });
  }

  getProductDetails(id: any) {
    return this.products.filter((item) => item.id === id)[0];
  }

  selectedChange(value: any) {
    this.selectedItem = value;
  }

  addProductToCart(product: Product): void {
    const cartProducts: Product[] = this.cartService.getCartProduct();
    const productInCart = cartProducts.find((ele) => ele.id === product.id);
    if (productInCart) {
      productInCart.amount = this.selectedItem;
      productInCart ? this.productService.addProduct(cartProducts) : null;
    } else {
      cartProducts.push(Object.assign(product, { amount: this.selectedItem }));
      this.productService.addProduct(cartProducts);
      const message = `${product.name} has been added to your cart.`;
      alert(message);
    }
    this.router.navigate(['/cart-page']);
    this.cartService.calculateCount();
  }
}
