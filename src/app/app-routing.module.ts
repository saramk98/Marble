import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './home/products/products.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { ShopsComponent } from './home/shops/shops.component';
import { ShopDetailComponent } from './home/shop-detail/shop-detail.component';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'products', // Add the route for products
    component: ProductsComponent,
  },
  {
    path: 'productdetail', // Add the route for products
    component: ProductDetailComponent,
  },
  {
    path: 'categories', // Add the route for products
    component: CategoriesComponent,
  },
  {
    path: 'shops', // Add the route for products
    component: ShopsComponent,
  },
  {
    path: 'shopdetail', // Add the route for products
    component: ShopDetailComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
