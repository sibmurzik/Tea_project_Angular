import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../types/product.type";
import {Observable} from "rxjs";
import {OrderRequest} from "../types/order.type";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {



  constructor(private http: HttpClient) { }

  getProducts():Observable<ProductType[]> {
    return this.http.get<ProductType[]>(`https://testologia.ru/tea`);
  }

  getProduct(id: number) :Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.ru/tea?id=${id}`);
  }

  searchProducts(search: string) :Observable<ProductType[]> {
    return this.http.get<ProductType[]>(`https://testologia.ru/tea?search=${search}`);
  }

  createOrder(data: OrderRequest){
    return this.http.post<{success:number, message?:string}>('https://testologia.ru/order-tea', data);

  }


}
