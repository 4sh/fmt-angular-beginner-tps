import {Component, OnInit, signal} from '@angular/core';
import {Bottle} from '../../models/bottle.model';
import {CellarService} from '../../services/cellar.service';
import {RouterLink} from '@angular/router';
import {Router} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {FilterByEstatePipe} from '../../pipes/filter-by-estate.pipe';
import {BottleTileComponent} from '../../components/bottle-tile/bottle-tile.component';

@Component({
    selector: 'bottles-list-page',
    templateUrl: './bottles-list-page.component.html',
    imports: [
        RouterLink,
        BottleTileComponent,
        TranslatePipe,
        FormsModule,
        FilterByEstatePipe,
        BottleTileComponent
    ],
    styleUrl: './bottles-list-page.component.scss'
})
export class BottlesListPageComponent implements OnInit {
    public bottles = signal<Bottle[]>([]);
    public query: string = '';

    constructor(private router: Router,
                private cellarService: CellarService) {
    }

    ngOnInit(): void {
        this.cellarService
            .getManyBottles()
            .subscribe(bottles => this.bottles.set(bottles));
    }

    public edit(bottle: Bottle): void {
        this.router.navigate(['/cellar/bottle', bottle.id, 'details']).then();
    }
}
