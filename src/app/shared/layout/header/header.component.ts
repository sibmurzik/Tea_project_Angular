import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({
    "search": new FormControl("")
  })


  constructor(private router: Router, private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.searchForm.get("search")?.valueChanges.subscribe((value) => {
      if (value === '') {
        this.searchForm.reset();
        //console.log("location", location.href)
        if ((location.href).includes('/catalogue')) {
          this.router.navigate(['/catalogue'])
        }

      }
    })
  }


  searchProducts(): void {
    const searchStr = this.searchForm.get('search')?.value;
    if (searchStr) {
      this.productService.searchProducts(searchStr)
        .subscribe({
            next: result => {
              //console.log(result);
              this.router.navigate(['/catalogue'], {queryParams: {search: searchStr}});
            },
            error: error => {
              this.router.navigate(['/']);
            }
          }
        )
    }

  }

}
