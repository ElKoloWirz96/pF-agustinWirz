import { Directive } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor() {
    console.log('ResaltadoDirective se ha instanciado')
  }

}
