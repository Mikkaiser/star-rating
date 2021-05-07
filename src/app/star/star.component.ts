import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {

  constructor() { }
  
  rating: number = 0;

  ngOnChanges(): void {
    this.rating = 3.5;
  }

}
