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

  totalSeats:number = 0;
  repeatAskVotes: object[] = [
    { party: "", votes: ""},
  ];
  finalResults: Partyvotes[] = [];
  

  constructor() { 

  }

  ngOnInit() {
    console.clear()
    // (this.generateCanvas())
  }

  addOne(){
    this.repeatAskVotes.push({ party: "", votes: ""})
  }

  remove(index: number){
    if(this.repeatAskVotes.length===1){
      return;
    } else {
      this.repeatAskVotes=this.repeatAskVotes
                              .filter((object)=>this.repeatAskVotes.indexOf(object)!==index)
    }
    
  }

  submitForm(myForm: NgForm) {
    debugger
    console.log(myForm.value)
    console.log(NgModel)
    this.finalResults=[];
    this.finalResults=myForm.value;
    console.log(this.finalResults)
    
    
}

  generateCanvas(){
    
   
  }
}
