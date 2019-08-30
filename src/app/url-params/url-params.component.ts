import { Component, OnInit } from '@angular/core';
import { PhoneBook } from '../../data/phonebook';
import { Router } from '@angular/router';

@Component({
  selector: 'app-url-params',
  templateUrl: './url-params.component.html',
  styleUrls: ['../../styles/_url-params.component.scss']
})



export class UrlParamsComponent implements OnInit {

  phoneBook: object[] = PhoneBook;;

  constructor(private route: Router) {
    
  }
  
  ngOnInit() {
    console.clear()
  }

  viewDetails(id){
    this.route.navigate(['contact', id]);
  }

}
