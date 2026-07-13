import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main.component";
import {CatalogueComponent} from "../products/cataloque/catalogue.component";

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'catalogue', component: CatalogueComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
