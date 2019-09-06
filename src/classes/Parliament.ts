import { Partyvotes } from './Partyvotes'

class Parliament {
    constructor(results: Partyvotes[], algorithm: string, minimum: number, seats:number){
        
        
    }
    totalValidVotes:number=0;
    partiesWithSeats:Partyvotes[];
    finalComposition:Partyvotes[];
    
    getValidVotes(results):void{
        this.totalValidVotes= results.map(party=>party.votes).reduce((a,b)=>a+b)
    };

    whoGetsSeats(results: Partyvotes[], minimum: number){
        this.partiesWithSeats= results.filter(party=>party['votes'] >= (this.totalValidVotes/100)*minimum)
    }

    getComposition(partiesWithSeats:Partyvotes[], algorithm:string, seats:number ){

        let divisor:number=1, simulatedArray:Partyvotes[]=[], dividedVotes:Partyvotes[]=[];

        while(this.finalComposition.length < seats){
            
            dividedVotes=this.partiesWithSeats.map(party=>{
                                                            party['votes']/=divisor;
                                                            return party;
                                                            })
            dividedVotes.forEach(party=>{
                simulatedArray.push(party);
                simulatedArray.sort((a,b)=>a['votes']-b['votes'])  
            })

            if(algorithm==="D'Hont"){
                divisor++
            } else if(algorithm==="Saint-League"){
                divisor+=2
            }

            
        }


    }



}

var x=new Parliament( [
    { party: "PP", votes: "2000"},
    { party: "PSOE", votes: "1700"},
    { party: "C's", votes: "1200"},
    { party: "UP", votes: "1000"},
], "D'Hont", 5, 30)

console.log(x)