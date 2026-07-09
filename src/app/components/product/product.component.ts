import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  product: ProductType

  private subscription: Subscription | null = null;

  constructor(private productService: ProductsService , private activatedRoute: ActivatedRoute, private router: Router) {
    this.product = {
      id: 0,
      image:'',
      title:'',
      description:'',

    }

  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.productService.getProduct(+params['id'])
          .subscribe( {
            next:(data) => {
              this.product = data;
              //console.log(this.product);
            },
            error: error => {
              this.router.navigate(['/']);
            }
          });

      }

    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
