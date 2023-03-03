import { productList } from './../models/productList';
import { Iproduct } from './../models/iproduct';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Iproduct[] = productList;

}
