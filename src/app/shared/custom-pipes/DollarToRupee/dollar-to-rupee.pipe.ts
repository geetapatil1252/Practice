import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollarToRupee'
})
export class DollarToRupeePipe implements PipeTransform {

  transform(value:number, rate:number=86): string {
    const rupees = value*rate
    return `₹${rupees}`
  }

}
