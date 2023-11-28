import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  url="https://dummyjson.com/products/"
  constructor(private http:HttpClient) { }
  users(data:any){
    return this.http.get(this.url+data);
  }
}
