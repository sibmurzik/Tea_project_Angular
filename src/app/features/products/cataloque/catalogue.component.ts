import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductsService} from "../../../shared/services/products.service";
import {ProductType} from "../../../../types/product.type";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cataloque',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit , OnDestroy {

  public products : ProductType[] = [];
  public header:string = '';

  public loading = false;
  private subscription: Subscription | null = null;
  private searchSubscription: Subscription | null = null;

  constructor(private productService: ProductsService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
        this.loading = true;
        this.searchSubscription = this.activateRoute.queryParams.subscribe(params => {
          const search = params['search'];
        if (search) {
          this.subscription = this.productService.searchProducts(search)
            .subscribe({
              next: data => {
                this.products = data;
                if (this.products && this.products.length > 0) {
                  this.header = `Результаты поиска по запросу - ${search}`;
                } else {
                  this.header = 'Ничего не найдено'
                }
                //console.log(this.products);
                this.loading = false;
              },
              error: error => {
                console.error(error);
                this.router.navigate(['']);
                this.loading = false;
              }
            });

        }
        else {
          this.subscription = this.productService.getProducts()
            .subscribe({
              next: data => {
                this.products = data;
                //console.log(this.products);
                if (this.products && this.products.length > 0) {
                  this.header = `Наши чайные коллекции`;
                } else {
                  this.header = 'Ничего не найдено'
                }
                this.loading = false;
              },
              error: error => {
                console.error(error);
                this.router.navigate(['']);
                this.loading = false;
              }
            });



        }


        });



    }
    ngOnDestroy() {
      this.subscription?.unsubscribe();
      this.searchSubscription?.unsubscribe();
    }
}
