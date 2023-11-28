import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent  implements OnInit {
  selectedCategory: string | null = null;
  constructor() { }

  ngOnInit() {}
  showSubCategories(category: string) {
    if (this.selectedCategory === category) {
      // Clicking on the same category again should hide it
      this.selectedCategory = null;
    } else {
      this.selectedCategory = category;
    }
  }

}
