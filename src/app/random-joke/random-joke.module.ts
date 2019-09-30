import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RandomJokeComponent } from './random-joke.component';
import { RandomJokeRoutingModule } from '../random-joke/random-joke-routing.module';
import { FormsModule} from '@angular/forms';


@NgModule({
    imports: [CommonModule, RandomJokeRoutingModule, FormsModule, ],
    declarations: [RandomJokeComponent]
  })
  export class RandomJokeModule {
      
  }