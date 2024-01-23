import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {catchError, map, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Directive({
    selector: '[existingUrlValidator]',
    providers: [{
        provide: NG_ASYNC_VALIDATORS,
        useExisting: forwardRef(() => ExistingUrlValidatorDirective),
        multi: true
    }]
})
export class ExistingUrlValidatorDirective implements AsyncValidator {

    constructor(private httpClient: HttpClient) {
    }

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        return this.httpClient.head(control.value)
            .pipe(
                map(() => null),
                catchError(() => of({'fakeUrl': true}))
            );
    }
}
