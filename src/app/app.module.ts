import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/partials/header/header.component';
import { UserInfoComponent } from './component/partials/user-info/user-info.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CartPageComponent } from './component/page/cart-page/cart-page.component';
import { ProductPageComponent } from './component/page/product-page/product-page.component';
import { CheckoutPageComponent } from './component/page/checkout-page/checkout-page.component';
import { HomePageComponent } from './component/page/home-page/home-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInfoComponent,
    CartPageComponent,
    HomePageComponent,
    ProductPageComponent,
    CheckoutPageComponent,
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
