import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./features/main/main.component";
import {CatalogueComponent} from "./features/products/cataloque/catalogue.component";
import {ProductComponent} from "./features/products/product/product.component";
import {OrderComponent} from "./features/order/order.component";
import {LayoutComponent} from "./features/layout.component";

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      { path:'', loadChildren: ()=> import('./features/main/main.module').then(m => m.MainModule) },
      { path:'product', loadChildren: ()=> import('./features/products/products.module').then(m => m.ProductsModule) },
      { path:'order', loadChildren: ()=> import('./features/order/order.module').then(m => m.OrderModule) },

    ]

  },
  {path:'**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
