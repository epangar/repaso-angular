import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ListService } from "../../services/list.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['../../styles/_frame.scss'],
  
  providers : [ListService]
})
export class ScreenComponent implements OnInit {
  @Input() 
  route:string;
  
  
  constructor(router: Router) { 
    this.route=router.url;
    console.log(this.route); 
}

  ngOnInit() {
    //this.route=this.router.url
    console.clear()
  }


}
