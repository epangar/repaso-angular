import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneBook } from '../../data/phonebook';

@Component({
  selector: 'app-url-params-id',
  templateUrl: './url-params-id.component.html',
  styleUrls: ['../../styles/_url-params-id.component.scss']
})
export class UrlParamsIdComponent implements OnInit {
  contact: object;
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.clear()
    this.route.params
      .subscribe((params)=>{

        this.contact = PhoneBook[params['id']];

      });
    
  }


}
