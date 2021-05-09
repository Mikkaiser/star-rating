import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  constructor() { }
  
  rating : number = 0;
  starWidth !: number;

  ngOnInit(): void {
    this.rating = 5;
    this.starWidth = this.rating * 70;
    console.log(this.starWidth);
  }
}
