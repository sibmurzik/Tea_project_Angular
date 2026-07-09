import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {CatalogueComponent} from "./components/cataloque/catalogue.component";
import {ProductComponent} from "./components/product/product.component";
import {OrderComponent} from "./components/order/order.component";

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'catalogue', component: CatalogueComponent},
  {path:'product/:id', component:ProductComponent },
  {path:'order', component: OrderComponent},
  {path:'**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
