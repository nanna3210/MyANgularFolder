import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[validatorName][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: NumbdDirective, multi: true },
  ],
})
export class NumbdDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    console.log(control.value);

    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
}
