import {Component, OnInit} from '@angular/core';
import {Stats} from '../../models/stats.model';
import {CellarService} from '../../services/cellar.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'stats-page',
    templateUrl: './stats-page.component.html',
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
