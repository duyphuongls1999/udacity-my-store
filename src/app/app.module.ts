import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CheckoutFromComponent } from './component/checkout-from/checkout-from.component';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HomeComponent } from './component/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CheckoutFromComponent,
    CartComponent,
    ProductComponent,
    UserInfoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
