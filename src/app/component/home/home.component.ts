import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { Product } from '../../model/Product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProduct();
  }

}
