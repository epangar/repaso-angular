import { Partyvotes } from './Partyvotes'

class Parliament {
    constructor(results: Partyvotes[], algorithm: string, minimum: number, seats:number){
        results=results;
        algorithm=algorithm;
        minimum=minimum;
        seats=seats;
        
    }

}

var x=new Parliament( [
    { party: "PP", votes: "2000"},
    { party: "PSOE", votes: "1700"},
    { party: "C's", votes: "1200"},
    { party: "UP", votes: "1000"},
], "D'Hont", 5, 30)

console.log(x)