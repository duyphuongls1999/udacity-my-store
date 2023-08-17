import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutFromComponent } from './component/checkout-from/checkout-from.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'success/:firstName/:totalPrice', component: CheckoutFromComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
