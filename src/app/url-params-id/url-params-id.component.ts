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
  // contactId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params)=>{
        
        // this.contactId = ;
        this.contact = PhoneBook[params['id']];
        
      });
    console.log(this)
  }


}
