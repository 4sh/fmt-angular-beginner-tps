import {Component, input, OnInit, output} from '@angular/core';
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
export class BottleStickerImageComponent implements OnInit {
    public bottle = input<Bottle>();
    public imageClick = output<Bottle>();
    public defaultWidth?: number;
    public defaultHeight?: number;

    ngOnInit(): void {
        this.defaultWidth = this.defaultHeight = 64;
    }

    public onImageClick(): void {
        this.imageClick.emit(this.bottle()!);
    }
}
