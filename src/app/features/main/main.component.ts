import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
    public isPopupOpen = false;

    private subscription?: Subscription;
    ngOnInit(): void {
      const obs$: Observable<boolean> = new Observable(observer => {
        setTimeout(() => {
          observer.next(true);
          observer.complete();
        }, 10000);
      });

      this.subscription = obs$.subscribe( {
        next:(value)=> this.isPopupOpen = value,


      })

    }
    ngOnDestroy(): void {
      this.subscription?.unsubscribe();

    }

    closePopup(): void {
      this.isPopupOpen = false;
    }




}
