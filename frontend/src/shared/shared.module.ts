import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

const pipes: unknown[] = [
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
        })
    ],
    exports: [
        pipes
    ]
})
export class SharedModule {
}
