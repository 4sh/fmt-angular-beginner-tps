import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const pipes: unknown[] = [
];

@NgModule({
    declarations: [
        pipes
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule
    ],
    exports: [
        pipes
    ]
})
export class SharedModule {
}
