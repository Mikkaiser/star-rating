import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit{

  constructor() { }
  
  rating !: number;
  starWidth !: number;
  
  ngOnInit(): void {
  
  }

  setRating(rating : any) : any {
    rating = Number(rating);
    if(rating == '' || rating > 5){
      rating = 5;
    }
    this.rating = rating; //Here the rating's value is defined
    this.starWidth = this.rating * 70;
  }
}
