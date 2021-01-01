import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {StarComponent} from '../shared/star.component';
import {ProductService} from '../shared/services/product.service'
@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  

  pageTitle: string ="ACME Product Management";
  imageWidth : number = 50;
  imageMargin : number = 2;
  showImage : boolean = false;
  filterProducts: IProduct[];
  products: IProduct[] ;
  _listFilter: string ;
  erroMessage: string;
  get listFilter(): string{
    return this._listFilter;
  }
  
  set listFilter(value: string){
    this._listFilter=value;
    this.filterProducts= this.listFilter? this.performFilter(this.listFilter):this.products ;
  }

     
  constructor(private productService: ProductService) {

   }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products=>{
        this.products=products;
        this.filterProducts = this.products;
      },
      error : err => this.erroMessage= err
    });
    
  }

  toggleImage(): void{
    this.showImage=!this.showImage;
  }

  performFilter(listFilter: string): IProduct[] {
    listFilter = listFilter.toLowerCase();

    return this.products.filter((product:IProduct) =>
    product.productName.toLowerCase().indexOf(listFilter)!==-1);

  }

  onRatingClicked(message: string):void{
    this.pageTitle= 'Product List:'+message ;
  }
}
