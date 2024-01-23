import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {Observable, of} from 'rxjs';

@Directive({
    selector: '[existingUrlValidator]',
    providers: [{
        provide: NG_ASYNC_VALIDATORS,
        useExisting: forwardRef(() => ExistingUrlValidatorDirective),
        multi: true
    }]
})
export class ExistingUrlValidatorDirective implements AsyncValidator {
    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        return of(null); // TODO
    }
}
