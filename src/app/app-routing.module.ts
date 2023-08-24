import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/page/home-page/home-page.component';
import { ProductPageComponent } from './component/page/product-page/product-page.component';
import { CartPageComponent } from './component/page/cart-page/cart-page.component';
import { CheckoutPageComponent } from './component/page/checkout-page/checkout-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product-page/:id', component: ProductPageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'checkout-page/:fullName/:totalPrice', component: CheckoutPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
