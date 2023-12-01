import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FilterByPipe} from './pipes/filter-by.pipe';
import {ToastrModule} from 'ngx-toastr';

const pipes: unknown[] = [
    FilterByPipe
];

@NgModule({
    declarations: [
        pipes
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-right',
            progressBar: true,
        }),
    ],
    exports: [
        pipes
    ]
})
export class SharedModule {
}
