import { Component, OnInit } from '@angular/core';
import { RandomJokeService } from '../../services/random-joke.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['../../styles/_random-joke.scss']
})
export class RandomJokeComponent implements OnInit {

  category: string;
  joke: any;

  constructor(private random: RandomJokeService, router: Router) { }

  ngOnInit() {
    console.clear();
    this.joke={}
  }

  getAJoke(){
    this.random.getJoke(this.category).subscribe((data)=>{
      this.joke=data;
      console.log(data);
      console.log(this.joke)

    })
  }
}
