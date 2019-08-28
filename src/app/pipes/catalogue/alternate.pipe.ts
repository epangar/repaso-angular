import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "alternate"
})

export class AlternatePipe implements PipeTransform {
    transform(input:string, args: any[]): any {
        return !input 
        ? "" 
        : input.split("").map((c,p)=> p%2===0 ? c.toUpperCase() : c.toLowerCase()).join("")
    }
}