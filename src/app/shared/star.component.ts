import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector:'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    ngOnChanges(): void {
       this.starwidth = this.rating * 75 /5;
    }
    @Input()
    rating: number =4;
    starwidth:number;
    @Output()
    ratingClicked :EventEmitter<string> = 
        new EventEmitter<string>();


    onClick(): void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}