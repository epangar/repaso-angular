import { Component, OnInit, Input } from '@angular/core';
import { ListService } from "../../services/list.service";
import { Router } from '@angular/router';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['../../styles/_movie.scss']
})

export class MovieComponent implements OnInit {
  
  //@Input()   
  movies: any[];
  movie: any;
  route: string;

  constructor(private listService: ListService, router: Router) {
      this.route = router.url; 
    }

  ngOnInit() {
    
    console.clear()
    this.movies=[]
    
  }

  getMovies() {
    this.listService.getAll().subscribe(data=> {
      
      this.movies = data
      
      this.movies.forEach((movie, position)=>movie["number"]=position+1)
      console.log(this.movies);
    })
  }

  clean(){
    this.movies=[]
  }

  delete(movie: any){
    
    this.movies=this.movies.filter(m=> m!==movie);
    this.movies.forEach(movie=>{
      movie.number=this.movies.indexOf(movie)+1
    })
    console.log(this.movies)
  }

  getMyMovies(){
    
    this.movies;
  }

  trackById = (id: any, item: any) =>  !item ? null : item.id;

  addMovietoMyMovies(){
  }

  getRandomIdValue(input:string = ""){
    
    return input.split("")
      .map(c=> c.charCodeAt(0)*Math.floor(Math.random()*5) )
      .reduce((a,b)=>a+b)
  }

  
    
   

}
