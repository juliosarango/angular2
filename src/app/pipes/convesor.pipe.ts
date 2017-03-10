import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'conversorPipe' })

export class ConversorPipe implements PipeTransform {
    transform(value:number,exponente:string):number {
        let exp = parseFloat(exponente);
        return value * (isNaN(exp)? 1: exp);
    }

}