import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Partyvotes } from '../../classes/Partyvotes';
import { Chart, ChartData, Point, ChartColor } from 'chart.js';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['../../styles/_chart.scss']
})


export class ChartComponent implements OnInit {

  algorithm:string =""
  totalSeats:number = 0;
  totalValidVotes:number=0;
  minimum:number=0;
  partiesWithSeats:Partyvotes[];
  finalComposition:Partyvotes[];

  currentParty: Partyvotes = {
    party:"",
    votes:"",
  }
  finalResults: Partyvotes[] =[]
  
  

  constructor() { 

  }

  ngOnInit() {
    console.clear()
    // (this.generateCanvas())
  }

  addOne(){
    debugger
    this.finalResults.push(this.currentParty)
    this.currentParty = {
      party:"",
      votes:"",
    };
    (this.getValidVotes(this.finalResults));
    this.whoGetsSeats(this.finalResults, this.minimum);
    return  
  }

  remove(index: number){
    this.finalResults=this.finalResults
                              .filter((object)=>this.finalResults.indexOf(object)!==index);
                              debugger
    (this.getValidVotes(this.finalResults));
  }

  submitForm(myForm: NgForm) {
    debugger
    console.log(myForm.value)
    console.log(NgModel)
    this.finalResults=[];
    this.finalResults=myForm.value;
    console.log(this.finalResults);
    this.getValidVotes(this.finalResults);
    this.getComposition(this.partiesWithSeats, this.algorithm, this.totalSeats)
}

  getValidVotes(finalResults):void{
    if(finalResults.length===0){
      this.totalValidVotes=0;
    }else {
      this.totalValidVotes= finalResults.map(party=>party.votes).reduce((a,b)=>a+b)
    }
    
  };

  whoGetsSeats(finalResults: Partyvotes[], minimum: number){
    this.partiesWithSeats= finalResults.filter(party=>party['votes'] >= (this.totalValidVotes/100)*minimum)
  }
  
  getComposition(partiesWithSeats:Partyvotes[], algorithm:string, seats:number ){

    let divisor:number=1, simulatedArray:Partyvotes[]=[], dividedVotes:Partyvotes[]=[];

    while(this.finalComposition.length < seats){
        debugger
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
  generateCanvas(){
    
   
  }
}
