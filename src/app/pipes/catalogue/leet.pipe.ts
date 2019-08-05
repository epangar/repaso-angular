import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "leet"
})

export class LeetPipe implements PipeTransform {
    transform(input:string, args: any[]): any {
        return !input 
        ? "" 
        : input.split("").map(function(c){
            var obj={
                "o": "0",
                "O": "0",
                "b": "8",
                "B": "8",
                "t": "7",
                "T": "7",
                "g": "6",
                "G": "6",
                "s": "5",
                "S": "5",
                "a": "4",
                "A": "4",
                "e": "3",
                "E": "3",
                "z": "2",
                "Z": "2",
                "i": "1",
                "I": "1"
            }

            return (Object.keys(obj).includes(c)) ? obj[c] : c
            
        }).join("")
    }
}