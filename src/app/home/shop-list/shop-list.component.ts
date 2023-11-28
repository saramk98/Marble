import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
})
export class ShopListComponent  implements OnInit {
  @Input()
  text!: string;
  @Input()
  imageSrc!: string;
  constructor() { }

  ngOnInit() {}

}
