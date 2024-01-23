import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';

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
        // TODO

        // step 2
        // TODO

        // step 3
        // TODO

        // step 4
        // TODO

        // step 5
        const bottles$: Observable<string> = of('cheval blanc', 'haut brion', 'cheval blanc', 'pape clement');
        // TODO
    }

}
