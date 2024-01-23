import {Injectable} from '@angular/core';
import {Bottle, Color} from '../models/bottle.model';

@Injectable({
    providedIn: 'root'
})
export class CellarService {
    // TODO
    private bottles: Bottle[] = [
        {
            id: '1',
            estate: 'Château Petrus',
            vintage: 2002,
            color: Color.RED,
            stickerUrl: 'http://localhost:3000/static/stickers/petrus.jpeg'
        },
        {
            id: '2',
            estate: 'Château Cheval Blanc',
            vintage: 2002,
            color: Color.RED,
            stickerUrl: 'http://localhost:3000/static/stickers/cheval-blanc.jpg'
        },
        {
            id: '3',
            estate: 'Château Carbonnieux',
            vintage: 2005,
            color: Color.WHITE,
            stickerUrl: 'http://localhost:3000/static/stickers/carbonnieux.jpg'
        },
        {
            id: '4',
            estate: 'Château Pape Clément',
            vintage: 2016,
            color: Color.ROSE
        }
    ];

    // TODO
    public getManyBottles(): Bottle[] {
        return [...this.bottles];
    }

    // TODO
    public getOneBottleById(id: string): Bottle | undefined {
        const foundBottle = this.bottles.find(bottle => bottle.id === id);
        if (foundBottle) {
            return {...foundBottle};
        } else {
            return undefined;
        }
    }

    // TODO
}
