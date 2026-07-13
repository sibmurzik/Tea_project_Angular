import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {OrderComponent} from "./order.component";
import {OrderRoutingModule} from "./order-routing.module";





@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    OrderRoutingModule,
  ],
  exports: [
    OrderRoutingModule
  ]


})
export class OrderModule { }
