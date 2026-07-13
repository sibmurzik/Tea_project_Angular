import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {MainComponent} from "./main.component";
import {NgbAccordionModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgbAccordionModule,
    MainRoutingModule
  ],
  exports: [
    MainRoutingModule
  ]

})
export class MainModule { }
