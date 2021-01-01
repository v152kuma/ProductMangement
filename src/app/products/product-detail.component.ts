import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
 // selector: 'pm-product-detail', not required as this will exposed through routing
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product:IProduct;
  constructor() { }

  ngOnInit(): void {
  }

}
