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
    this.rating = 5; //Here the rating's value is defined
    this.starWidth = this.rating * 70;
  }
}
