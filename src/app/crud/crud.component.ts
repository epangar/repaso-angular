import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {DATA} from '../../classes/DATA';
import { map, filter } from 'rxjs/operators';



@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['../../styles/_crud.scss']
})



export class CrudComponent implements OnInit {

  constructor(router: Router) { }
  
  myTable: DATA[];
  CrudDataBase: Array<DATA>  =[
    {name: "Alfredo Bartho", id: "1a2s3d4f5g", keywords:["alfa", "gold", "delta"], position: 1},
    {name: "Bernardo Gante", id: "6h7j8k9l0a", keywords:["echo", "beta", "foxtrot"], position: 2},
    {name: "Carlos Alberto", id: "1l2k3j4h5g", keywords:["quebec", "romeo", "echo"], position: 3},
    {name: "Diana Kersh", id: "q2w3e4r5t6", keywords:["charlie", "tango", "foxtrot"], position: 4},
    {name: "Eustaquio", id: "p0o9i8u7y6", keywords:["x-ray", "oscar", "beta"], position: 5},
    {name: "Francisco", id: "z1x2c3v4b5", keywords:["zulu", "gold", "charlie"], position: 6},
    {name: "Gabriel", id: "0d9f7t6y5h", keywords:["delta", "iota", "jungle"], position: 7},
    {name: "Homero", id: "w4e5r6f7g8", keywords:["hache", "tango", "alfa"], position: 8},
    {name: "Ignatius", id: "l4k3j9h8g8", keywords:["hache", "kilo", "jungle"], position: 9},
    {name: "Jerome Igor", id: "m2n6b7v3c8", keywords:["junio", "kilo", "lambda"], position: 10},
    {name: "Kenny Front", id: "0n9j8d6x5q", keywords:["lambda", "junio", "iota"], position: 11},
  ]

  ngOnInit() {
    
    console.clear()
    this.myTable = this.CrudDataBase.map(o=>o);
    
    
  }

  fill(){
    this.myTable = this.CrudDataBase.map(o=>o);
  }

  getElementByname(input:string){
    this.myTable = this.CrudDataBase.map(element => element).filter(element => element['name'].includes(input))
  }

  getKeywords(input: string){
    this.myTable = this.CrudDataBase.map(element => element).filter(element => element['keywords'].includes(input))
  }
  getElementByPosition(valueOfId: any){
    
    
    valueOfId=parseInt(valueOfId);
    if(valueOfId===0){
      this.myTable = this.CrudDataBase.map(element => element);
      return;

    } else {

      this.myTable=this.CrudDataBase.map(o=>o);

      this.myTable=this.myTable.filter(o => {
        
        return o['id']===valueOfId;
      });

      
      console.log(this.myTable)
      return;
    }
    
  }
  
  
  

  

}