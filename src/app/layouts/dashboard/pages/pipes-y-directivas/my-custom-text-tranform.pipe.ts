import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomTextTranform'
})
export class MyCustomTextTranformPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }

}
