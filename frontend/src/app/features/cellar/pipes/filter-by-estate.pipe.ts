import {Pipe, PipeTransform} from '@angular/core';
import {Bottle} from '../models/bottle.model';

@Pipe({
    name: 'filterByEstate'
})
export class FilterByEstatePipe implements PipeTransform {

    transform(bottles: Bottle[], query: string): Bottle[] {
        return bottles.filter(bottle => this.matchEstate(bottle, query));
    }

    private matchEstate(bottle: Bottle, query: string): boolean {
        return this.removeAccents(bottle.estate)
            .match(new RegExp(this.removeAccents(query.trim()), 'i')) !== null;
    }

    private removeAccents(text: string): string {
        return text
            // Normalizing to NFD Unicode normal form decomposes combined graphemes into the combination of simple ones.
            // The è of Crème ends up expressed as e +  ̀.
            .normalize('NFD')
            // Getting rid of the diacritics thanks to the use of Unicode property escapes
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
            .replace(/\p{Diacritic}/gu, '');
    }
}
