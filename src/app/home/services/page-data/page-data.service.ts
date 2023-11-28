import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { products } from '../../shared/data/data'
@Injectable({
  providedIn: 'root'
})
export class PageDataService {
 url="https://dummyjson.com/products/"
  constructor(private http:HttpClient) { }
  users(data:any){
    return this.http.get(this.url+data);
  }

  isButtonActive: boolean = false;
  hideCheckboxes = false;
  hideCheckboxes2 = false;
  hideProgress = false;
  products=products;
  selectedRange: number =0;
  selectedCategory:string='';
  selectedCity:string='';
  selectedRange2: number =0;
  filteredProducts: any[] = this.products;

  // Function to filter products by category
  filterProducts(category: string, city: string, range: number) {
    this.isButtonActive = true;
    
    if (category === this.selectedCategory && city === this.selectedCity && range === this.selectedRange2) {
      // Reset the filter and return all products
      this.selectedCategory = '';
      this.selectedCity = '';
      this.selectedRange2 = 0;
      return this.filteredProducts = this.products;
    } else {
      // Store the current filter criteria
      this.selectedCategory = category;
      this.selectedCity = city;
      this.selectedRange2 = range;
      // Apply the filter criteria
      if (category) {
        return this.filteredProducts = this.products.filter((product) => product.categories.includes(category));
      } else if (city) {
        return this.filteredProducts = this.products.filter((product) => product.shippedToCities.includes(city));
      } else if (range > 0) {
        return this.filteredProducts = this.products.filter((product) => product.price < range);
      } else {
        return this.filteredProducts = this.products; // No filter criteria, so return all products
        this.selectedRange=0;
      }
  
      
    }
  }
}
