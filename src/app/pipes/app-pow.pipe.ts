import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPow'
})
export class AppPowPipe implements PipeTransform {

  transform(value: any, powNumber: number = 1, symbol?: string) {
    if (symbol) {
      return symbol + Math.pow(value, powNumber);
    }
    return Math.pow(value, powNumber);
  }

}
