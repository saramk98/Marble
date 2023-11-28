import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-card',
  templateUrl: './best-card.component.html',
  styleUrls: ['./best-card.component.scss'],
})
export class BestCardComponent  implements OnInit {
  @Input()
  text!: string;
  @Input()
  imageSrc!: string;
  @Input()
  price!: string;

  constructor() { }

  ngOnInit() {}

}
