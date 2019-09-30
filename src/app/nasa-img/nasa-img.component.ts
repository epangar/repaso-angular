import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nasa-img',
  templateUrl: './nasa-img.component.html',
  styleUrls: ['../../styles/_nasa-img.scss']
})
export class NasaImgComponent implements OnInit {

  image: string;
  @Input() receivedImages: string[];
  @Input() index: number;
  constructor() { }

  ngOnInit() {
    this.index=this.index['number'];
    this.image=this.receivedImages[this.index-1];
    console.log(this.index)
    console.log(this.image)
  }

}
