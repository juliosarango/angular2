import { Directive, ElementRef, Input } from '@angular/core';

@Directive({selector: '[highLight]'})

export class HighLightDirective {
    constructor(el:ElementRef){
        el.nativeElement.style.background = 'yellow';
    }
}