import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formFieldValidationErrors'
})
export class FormFieldValidationErrorsPipe implements PipeTransform {

  transform(
    value: ValidationErrors | undefined | null, ...args: unknown[]
  ): unknown {
    console.log(value);

    if (value) {
      let messages: string[] = [];

      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          const element = value[key];

          if (key === 'required') messages.push('Este campo es requerido');
          
          if (key === 'pattern') messages.push('Este campo solo acepta letras');

          if (key === 'requiredPattern') messages.push('Este campo solo acepta emails test@test.com');
        }
      }
      return messages.join('. ');
    }
    return null;
  }

}
