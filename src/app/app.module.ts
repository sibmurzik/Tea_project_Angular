import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MainComponent } from './components/main/main.component';
import { CatalogueComponent } from './components/cataloque/catalogue.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {ProductsService} from "./services/products.service";
import {HttpClientModule} from "@angular/common/http";
import { ShortTextPipe } from './pipe/short-text.pipe';
import { CapitalizeFirstDirective } from './directives/capitalize-first.directive';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CatalogueComponent,
    ProductComponent,
    OrderComponent,
    HeaderComponent,
    FooterComponent,
    ShortTextPipe,
    CapitalizeFirstDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
