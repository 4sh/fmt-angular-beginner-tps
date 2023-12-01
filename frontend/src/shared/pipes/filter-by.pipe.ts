import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

    transform<T>(array: T[], key: keyof T, value: string): T[] {
        if (value === '') {
            return array;
        }

        if (!array.some(item => this.isAlphanumericProperty(item[key]))) {
            console.warn(`Could not apply ${FilterByPipe.name} because type of ${key as string} is neither a string nor a number`);
            return array;
        }

        return array
            .filter(item => {
                const property = item[key];
                if (this.isAlphanumericProperty(property)) {
                    return property.toString().match(new RegExp(value.trim(), 'i'));
                } else {
                    return false;
                }
            });
    }

    private isAlphanumericProperty(property: unknown): property is string | number {
        return typeof property === 'string'
            || typeof property === 'number';
    }
}