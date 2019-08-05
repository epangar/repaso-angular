import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "reverse"
})

export class ReversePipe implements PipeTransform {
    transform(input:string, args: any[]): any {
        return !input 
        ? "" 
        : input.split("").reverse().join("")
    }
}