import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductLisComponent implements OnInit {

    ngOnInit(): void {
        this.products =this.productService.getProducts();
        this.filterProducts = this.products;
    }
    constructor(private productService:ProductService) {
        
        //this.listFilter = 'cart';
    }
    pageTitle: String = 'Product List';
    products: IProduct[] ;
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    //listFilter: string = 'cart';
    filterProducts: IProduct[];
    _listFilter: string;
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filterProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLowerCase();
        return this.products.filter((z: IProduct) =>
            z.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    onRatingClicked(message :string):void{
        this.pageTitle = 'Product List  '+message;
    }

}
