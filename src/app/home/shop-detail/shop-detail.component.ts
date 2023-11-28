import { Component, OnInit } from '@angular/core';
import { products } from '../shared/data/data';
@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss'],
})
export class ShopDetailComponent  implements OnInit {

  constructor() { }
  
  ngOnInit() {}
  products=products;
}
