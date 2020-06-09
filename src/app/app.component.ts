import { Component, OnInit } from '@angular/core';
import { ListService } from "../services/list.service";
import { MovieComponent } from './movie/movie.component';
import { ChuckComponent } from './chuck/chuck.component';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { ScreenComponent } from './screen/screen.component';
import { DATA } from '../classes/DATA';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles/_app.scss'],
  providers: [ListService],
})

export class AppComponent {
  title = 'My Angular Demo';
  route: string;
  myCache: Object;
  logged: boolean;

  
  
  constructor(public router: Router){
    
    
    this.route = router.url; 
    this.myCache = {
      movies: [],
      chuck: [],
      nasa: [],
    }
    
  }

  ngOnInit() {
    console.clear()
    this.logged= true;
    // console.log(this)
    // console.log(this.myCache)
  }

  login(){
    this.logged=!this.logged;
    console.log(`logged = ${this.logged}`)
  }
  
}
  

  

