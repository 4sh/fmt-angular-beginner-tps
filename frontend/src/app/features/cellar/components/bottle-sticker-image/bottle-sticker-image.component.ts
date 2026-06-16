import {Component, input, output} from '@angular/core';
import {Bottle} from '../../models/bottle.model';
import {NgOptimizedImage} from '@angular/common';

@Component({
    selector: 'bottle-sticker-image',
    templateUrl: './bottle-sticker-image.component.html',
    imports: [
        NgOptimizedImage
    ],
    styleUrl: './bottle-sticker-image.component.scss'
})
export class BottleStickerImageComponent {
    public bottle = input<Bottle>();
    public imageClick = output<Bottle>();
    public defaultWidth = 64;
    public defaultHeight = 64;

    public onImageClick(): void {
        this.imageClick.emit(this.bottle()!);
    }
}
