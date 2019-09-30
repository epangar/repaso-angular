import { Component, OnInit, Input } from '@angular/core';
import { NasaService } from '../../services/nasa.service'
import { Router } from '@angular/router';
import { NasaDataComponent } from '../nasa-data/nasa-data.component';
import { NasaImgComponent } from '../nasa-img/nasa-img.component';


@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['../../styles/_lazy.scss']
})
export class LazyComponent implements OnInit {
  @Input()
  key: string;
  route: string;
  environment: any;
  nasa: any;
  images: string[];
  showData: boolean;
  showImg: boolean;
  

  constructor(router: Router, private nasaService: NasaService) {
    this.route=router.url;
    this.nasa=[];
    
   }


  ngOnInit() {
    
    console.clear()
    this.showData=false;
    this.showImg=false;
    
  }  
  
  //Curiosity, fecha

  getAll(){
      this.nasaService.getAll().subscribe(data=>{
        
        this.nasa=Object.values(data);
        
        this.nasa=this.nasa[0].map((obj,pos)=>{

          let  answer: any ={
            number: pos+1,
          }
          
          for(let i in obj){
            let key=i, value=obj[i]
            
            if(typeof(value)==="object"){

              for(let j in value){
                let key2=j, value2=value[j];

                answer[key2]=value2
              }
            }

            answer[key]=value
          }
          //console.log(answer);


          return answer;
        });

        this.getImg();
        
      })
  }


  getImg(){
    if(this.nasa.length>0){
      this.images=this.nasa.map(object=>object['img_src']);
    }
  }

  toggleData = () => this.showData = !this.showData;
  toggleImg = () => this.showImg = !this.showImg;

 clean(){
   console.clear()
   this.nasa=[]
   
 }
  

  

}
