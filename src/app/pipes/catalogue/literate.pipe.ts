import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "literate"
})

export class LiteratePipe implements PipeTransform {
    transform(input:string, args: any[]): any {
        return !input 
        ? "" 
        : input.split("").map((c,p)=> p===0 ? c.toUpperCase : c).join("")
    }
}