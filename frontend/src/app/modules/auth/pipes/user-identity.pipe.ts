import {Pipe, PipeTransform} from '@angular/core';
import {UserIdentity} from '../models/session.model';
import {UpperCasePipe} from '@angular/common';

@Pipe({
    name: 'userIdentity'
})
export class UserIdentityPipe implements PipeTransform {
    constructor(private upperCasePipe: UpperCasePipe) {
    }

    transform(userIdentity?: UserIdentity): string {
        if (!userIdentity) {
            return '';
        }

        return `${userIdentity.firstName} ${this.upperCasePipe.transform(userIdentity.lastName)}`;
    }

}
