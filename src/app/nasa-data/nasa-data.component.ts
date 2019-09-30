import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nasa-data',
  templateUrl: './nasa-data.component.html',
  styleUrls: ['../../styles/_nasa-data.scss']
})
export class NasaDataComponent implements OnInit {
  
  data: any;
  @Input() receivedData: any;
  @Input() index: number;
  
  constructor() { }

  ngOnInit() {
    
    this.index=this.index['number']-1;
    
    this.data=this.receivedData[0];
    this.data=this.data[this.index];
    
  }

}
