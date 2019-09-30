import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()

export class RandomJokeService{
    url: string = "https://sv443.net/jokeapi/category/";
    finalUrl:string= this.url;
    joke; object;

    constructor(private http: HttpClient){

    }

    getJoke(category: string){
        debugger

        if(category===undefined){
            category="Any";
        }  

        this.finalUrl=this.url;
        //this.finalUrl="https://api.chucknorris.io/jokes/random";
        this.finalUrl+=category;
        console.log(this.finalUrl)
        return this.http.get<string>(this.finalUrl).pipe(map(res=>res));
        
        
    }
}