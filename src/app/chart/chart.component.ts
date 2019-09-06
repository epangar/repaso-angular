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

  algorithm:string
  totalSeats:number = 0;
  
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
    }
    return  
  }

  remove(index: number){
    this.finalResults=this.finalResults
                              .filter((object)=>this.finalResults.indexOf(object)!==index)
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
