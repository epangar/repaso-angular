import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ChuckService } from "../../services/chuck.service";
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['../../styles/_chuck.scss']
})
export class ChuckComponent implements OnInit {
  @Input() 
  jokes: any;
  joke: any;
  route: string;

  constructor(private chuckService: ChuckService, public router: Router) {
    this.route = router.url;
   }


  ngOnInit() {
    
    console.clear()
    this.jokes=[]
    
  }

  getJokes(){
    this.chuckService.getAll().subscribe((data)=>{
      this.jokes=data;
      console.log(this.jokes)
    })
  }

  clean(){
    this.jokes=[]
  }

}
