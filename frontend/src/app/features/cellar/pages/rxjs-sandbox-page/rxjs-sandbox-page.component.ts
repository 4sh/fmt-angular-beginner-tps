import {Component, OnInit} from '@angular/core';
import {distinct, filter, interval, map, Observable, of, range, takeLast} from 'rxjs';

@Component({
    selector: 'rxjs-sandbox-page',
    templateUrl: './rxjs-sandbox-page.component.html',
    styleUrl: './rxjs-sandbox-page.component.scss'
})
export class RxjsSandboxPageComponent implements OnInit {

    public figures: number[] = [];
    public oddNumbers: number[] = [];
    public elapsedSeconds: number = 0;
    public bottles: string[] = [];

    ngOnInit(): void {
        // step 1
        const figures$ = range(0, 10);

        // step 2
        figures$.subscribe(figure => this.figures.push(figure));

        // step 3
        figures$
            .pipe(
                filter(figure => figure % 2 === 1),
                map(oddNumber => oddNumber + 10),
                takeLast(2)
            )
            .subscribe(figure => this.oddNumbers.push(figure));

        // step 4
        interval(1000)
            .subscribe(_ => this.elapsedSeconds++);

        // step 5
        const bottles$: Observable<string> = of('cheval blanc', 'haut brion', 'cheval blanc', 'pape clement');
        bottles$
            .pipe(
                distinct()
            )
            .subscribe(bottle => this.bottles.push(bottle));
    }

}
