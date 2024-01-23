import {Component, OnInit} from '@angular/core';
import {Stats} from '../../models/stats.model';
import {AsyncPipe, KeyValuePipe} from '@angular/common';
import {CellarService} from '../../services/cellar.service';
import {Observable} from 'rxjs';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
    selector: 'stats-page',
    templateUrl: './stats-page.component.html',
    imports: [
        KeyValuePipe,
        AsyncPipe,
        TranslatePipe
    ],
    styleUrl: './stats-page.component.scss'
})
export class StatsPageComponent implements OnInit {
    public stats$!: Observable<Stats>;

    constructor(private cellarService: CellarService) {
    }

    ngOnInit(): void {
        this.stats$ = this.cellarService.getStats();
    }
}
