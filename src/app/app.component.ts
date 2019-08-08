import { Component, OnInit } from '@angular/core';
import { ListService } from "../services/list.service";
import { MovieComponent } from './movie/movie.component';
import { ChuckComponent } from './chuck/chuck.component';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { ScreenComponent } from './screen/screen.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles/_app.scss'],
  providers: [ListService],
})

export class AppComponent {
  title = 'my Angular demo';
  route: string;
  myCache: Object;

  
  
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
    
    // console.log(this)
    // console.log(this.myCache)
  }

  
}
  

  

