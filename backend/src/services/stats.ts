import {getManyBottles} from './bottles.js';
import lodash from 'lodash';

const {groupBy, mapValues} = lodash;

export type Stats = {
    byColor: { [c: string]: number },
    byEstate: { [e: string]: number },
    byVintage: { [v: number]: number },
}

export function computeStats(): Stats {
    const bottles = getManyBottles();
    return {
        byColor: mapValues(groupBy(bottles, b => b.color), (bottles, color) => bottles.length),
        byEstate: mapValues(groupBy(bottles, b => b.estate), (bottles, color) => bottles.length),
        byVintage: mapValues(groupBy(bottles, b => b.vintage), (bottles, color) => bottles.length)
    };
}
