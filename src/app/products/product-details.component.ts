import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'

@Component({
  // don't need selector as we are using routing
  // selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: String ='Product Details'
  product: IProduct
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id')
    this.pageTitle = this.pageTitle +":"+ id
    this.product ={
        "productId": id,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
  }


  onBack():void{
    this.router.navigate(['/products']);
  }

}
