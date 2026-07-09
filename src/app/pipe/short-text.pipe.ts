import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  private textSize : number = 60;

  transform(value: string): string {
    if (value.length >= this.textSize) {
      let count:number = this.textSize;
      while (count < value.length) {
        if (value.charAt(count) === " "  || value.charAt(count) === ".") {
          return value.slice(0, count) + " ...";
        }
        count++;
      }


    }

     return value;
  }

}
