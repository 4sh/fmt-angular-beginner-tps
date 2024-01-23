import {Component} from '@angular/core';
import {Stats} from '../../models/stats.model';
import {KeyValuePipe} from '@angular/common';

@Component({
    selector: 'stats-page',
    templateUrl: './stats-page.component.html',
    imports: [
        KeyValuePipe
    ],
    styleUrl: './stats-page.component.scss'
})
export class StatsPageComponent {
    // TODO
    public stats: Stats = {
        byColor: {
            'RED': 2,
            'WHITE': 1,
            'ROSE': 1
        },
        byEstate: {
            'Chateau Petrus': 1,
            'Chateau Cheval Blanc': 1,
            'Chateau Carbonnieux': 1,
            'Chateau Leo': 1
        },
        byVintage: {
            2002: 2,
            2005: 1,
            2016: 1
        }
    };
}
