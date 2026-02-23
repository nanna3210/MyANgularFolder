import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appNumberd]',

  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NumberdDirective),
      multi: true,
    },
  ],
})
export class NumberdDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): { [key: string]: any } | null {
    const phoneNumberPattern = /^\d{10}$/;
    const valid = phoneNumberPattern.test(control.value);
    return valid ? null : { phoneNumberInvalid: true };
  }
  registerOnValidatorChange?(fn: () => void): void {
    // throw new Error('Method not implemented.');
  }
}
