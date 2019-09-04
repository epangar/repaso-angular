import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nasa-data',
  templateUrl: './nasa-data.component.html',
  styleUrls: ['../../styles/_nasa-data.scss']
})
export class NasaDataComponent implements OnInit {

  @Input()
  nasa: any;

  constructor() { }

  ngOnInit() {
    
  }

}
