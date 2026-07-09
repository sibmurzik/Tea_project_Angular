import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Country} from "../../types/country.type";
import {countries} from "../../types/countries";
import {OrderRequest} from "../../types/order.type";




@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  textPattern:string = '^[А-Яа-яЁё\\s]+$';
  namePattern:string = '^[А-Яа-яЁё]+$';
  phonePattern:string = '^(?:\\+)?(?:\\d *){11}$';
  addressPattern :string = '^[A-Za-zA-Яа-я0-9\\s\\-/]+$'

  public countries: Country[] = countries;

  public orderAccepted = false;
  public requestError = false;
  public sendingForm = false;

  private orderRequest : OrderRequest = {
    name: '',
    last_name: '',
    phone: '',
    country: '',
    zip: '',
    product: '',
    address: '',
    comment: '',

  }

  orderForm: FormGroup = this.formBuilder.group({
    product: [''],
    name: ['', {
      validators: [ Validators.pattern(this.namePattern),Validators.required],
      updateOn: 'blur'
    }],
    last_name: ['', {
      validators: [ Validators.pattern(this.namePattern),Validators.required],
      updateOn: 'blur'
    }],

    phone: ['', {
      validators: [ Validators.pattern(this.phonePattern),Validators.required],
        updateOn: 'blur'

    }],

    country: ['', {
      validators: [ Validators.required],
      updateOn: 'blur'
    }],

    zip: ['', {
      validators: [ Validators.required],
      updateOn: 'blur'
    }],

    address: ['', {
      validators: [ Validators.pattern(this.addressPattern), Validators.required],
    }],

    comment: ['']


  })



  private subscription: Subscription | null = null;

  constructor( private activatedRoute: ActivatedRoute, private  productService: ProductsService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
     this.subscription = this.activatedRoute.queryParams.subscribe(params => {
       if(params['product']){
          this.orderForm.patchValue({
              product: params['product']
            });
          this.orderForm.get("product")?.disable();
       }
     })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  get product() {
    return this.orderForm.get('product');
  }
  get name() {
    return this.orderForm.get('name');
  }
  get last_name() {
    return this.orderForm.get('last_name');
  }

  get phone() {
    return this.orderForm.get('phone');
  }

  get country() {
    return this.orderForm.get('country');
  }

  get zip() {
    return this.orderForm.get('zip');
  }

  get address() {
    return this.orderForm.get('address');
  }

  get comments() {
    return this.orderForm.get('comment');
  }

  sentOrder(): void {
    this.sendingForm = true;
    this.orderRequest = {
      name: this.name?.value,
      last_name: this.last_name?.value,
      phone: this.phone?.value,
      country: this.country?.value,
      zip: this.zip?.value,
      product: this.product?.value,
      address: this.address?.value,
      comment: this.comments?.value,

    }
    //console.log(this.orderRequest);
    this.productService.createOrder(this.orderRequest)
      .subscribe(res => {
        if (res.success && res.success === 1) {
          //alert("Спасибо за заказ");
          setTimeout(() =>{
            this.sendingForm = false;
            this.orderAccepted = true;
          }, 2000)

        } else {
          //alert('Ошибка');
          setTimeout(() =>{
            this.sendingForm = false;
            this.requestError = true;
            setTimeout(() =>{
              this.requestError = false;
            }, 3000)
          }, 1500)

        }
      })







  }

}
