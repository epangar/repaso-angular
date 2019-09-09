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
  selectValue: object = {

    "2x3": {
      "fizz":2,
      "buzz":3,
    },
    "2x5": {
      "fizz":2,
      "buzz":5,
    },
    "3x5": {
      "fizz":3,
      "buzz":5,
    },
  }
  currentFizz: number = 2;
  currentBuzz: number = 3;
  currentFizzBuzz: number = (this.currentFizz*this.currentBuzz);
  

  selectValueKeys: string[] = Object.keys(this.selectValue);
  selectedKey: string;
  selectedFunction=[this.selectValue]

  constructor(private listService: ListService, router: Router) {
      this.route = router.url; 
    }

  ngOnInit() {
    this.selectedKey =this.selectValueKeys[0]
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

  changeDirective(){
    
    console.log(this.selectedKey)
    this.currentFizz=this.selectValue[this.selectedKey]['fizz'];
    this.currentBuzz=this.selectValue[this.selectedKey]['buzz'];
    this.currentFizzBuzz = (this.currentFizz*this.currentBuzz);

  }

  trackById = (id: any, item: any) =>  !item ? null : item.id;

  

  // getRandomIdValue(input:string = ""){
    
  //   return input.split("")
  //     .map(c=> c.charCodeAt(0)*Math.floor(Math.random()*5) )
  //     .reduce((a,b)=>a+b)
  // }

  
    
   

}
