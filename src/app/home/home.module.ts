import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopsComponent } from './shops/shops.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageRoutingModule } from './home-routing.module';
import { FooterComponent } from './shared/footer/footer.component';
import { ListingCardComponent } from './listing-card/listing-card.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { StoreCardComponent } from './store-card/store-card.component';
import { BestCardComponent } from './best-card/best-card.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { CategoriesComponent } from './categories/categories.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownNavComponent } from './dropdown-nav/dropdown-nav.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    NgbDropdownModule,
    
  ],
  declarations: [DropdownNavComponent,PaginationComponent,ShopDetailComponent,ShopListComponent,ShopsComponent,CategoriesComponent,StarRatingComponent,ProductDetailComponent,ProductsComponent,BestCardComponent,StoreCardComponent,ProductCardComponent,ListingCardComponent,FooterComponent,NavbarComponent,HomePage]
})
export class HomePageModule {
  
}
