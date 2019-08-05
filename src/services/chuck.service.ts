import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';



@Injectable()
export class ChuckService {
    URL: string = "https://api.chucknorris.io/jokes/random";
    jokes: Array<any>;
   
  
    constructor(private http : HttpClient) { 
  
    }
  
    getAll(){   
      return this.http.get<any[]>(this.URL).pipe(map(res=>res));
    }
  
    
  }