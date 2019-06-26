import { Component, OnChanges } from '@angular/core';

@Component({
    selector:'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    ngOnChanges(): void {
       this.starwidth = this.rating * 75 /5;
    }
   
    rating: number =4;
    starwidth:number;
}