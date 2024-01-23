import {Component} from '@angular/core';
import {Bottle, Color} from '../../models/bottle.model';
import {BottleTileComponent} from '../../components/bottle-tile/bottle-tile.component';

@Component({
    selector: 'bottles-list-page',
    templateUrl: './bottles-list-page.component.html',
    imports: [
        BottleTileComponent
    ],
    styleUrl: './bottles-list-page.component.scss'
})
export class BottlesListPageComponent {
    public bottles: Bottle[] = [
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
}
