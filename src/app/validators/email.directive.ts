import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';


// 1
export function checkEmail(
  emailString: string
): ValidationErrors | null {
  const pattern = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
  if (emailString !== undefined && !pattern.test(emailString)) {
    return {
      email: true
    };
  }
  return null;
}

@Directive({
  selector: '[appEmail]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailDirective,
    multi: true
  }]
})
export class EmailDirective implements Validator {

  constructor() { }

  validate(c: AbstractControl): ValidationErrors | null {
    return checkEmail(c.value);
  }
}
