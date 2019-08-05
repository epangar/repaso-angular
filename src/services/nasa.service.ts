import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { EnvService } from '../services/env.service'


// "HPqdgddKDFJO9aT5m4RBNBWScfUhqzz6JAejwlyM"
@Injectable()
export class NasaService {
  

  apiKey: string = this.env["apiUrl"];
  URL: string = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=navcam&api_key="+this.apiKey;
  
  nasa: Array<any>;
 

  constructor(private http : HttpClient, private env: EnvService) { 
    
  }

  getAll(){   
      
    return this.http.get<any[]>(this.URL).pipe(map(data=>data));
  }

  
  
}
