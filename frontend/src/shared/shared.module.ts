import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterByPipe} from './pipes/filter-by.pipe';

const pipes: unknown[] = [
    FilterByPipe
];

@NgModule({
    declarations: [
        pipes
    ],
    imports: [
        CommonModule
    ],
    exports: [
        pipes
    ]
})
export class SharedModule {
}
