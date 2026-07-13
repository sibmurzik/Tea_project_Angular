import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {CapitalizeFirstDirective} from "./directives/capitalize-first.directive";
import {ShortTextPipe} from "./pipe/short-text.pipe";
import {RouterModule} from "@angular/router";
import {ProductsService} from "./services/products.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CapitalizeFirstDirective,
    ShortTextPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    CapitalizeFirstDirective,
    ShortTextPipe,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ProductsService,
  ]
})
export class SharedModule { }
