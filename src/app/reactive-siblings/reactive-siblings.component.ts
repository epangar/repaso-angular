import { Component, OnInit } from '@angular/core';
import { FirstSiblingComponent } from '../first-sibling/first-sibling.component';
import { SecondSiblingComponent } from '../second-sibling/second-sibling.component';

@Component({
  selector: 'app-reactive-siblings',
  templateUrl: './reactive-siblings.component.html',
  styleUrls: ['../../styles/_reactive-siblings.scss']
})
export class ReactiveSiblingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.clear()
  }

}
