import { Component, inject, TemplateRef, HostListener  } from '@angular/core';
import { NgbDatepickerModule, NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { products } from './shared/data/data'
import { PageDataService } from './services/page-data/page-data.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  card1Text: string = 'Tyrolit Diamond Blade For Marble';
  card1Image: string = 'https://admin.aptools.sa/uploads/images/products/Marble.jpg';
  price1: string = '$16,579'
  price2: string = '$34,769'
  price3: string = '$26,699'

  card2Text: string = 'Tyrolit DIAMOND BLADE';
  card2Image: string = 'https://admin.aptools.sa/uploads/images/products/TKmqfWV-scaled.jpg';

  card3Text: string = 'Die Grinder';
  card3Image: string = 'https://admin.aptools.sa/uploads/images/products/GS5000.jpg';
  filteredProducts: any[] = [];
  constructor(private pageData:PageDataService,private menuController: MenuController) {}

  openMenu() {
    this.menuController.open('start');
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

  isMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }
  
  ngOnInit() {
    this.filterProducts(this.selectedCategory,this.selectedCity,this.selectedRange);
    this.checkScreenSize();
  }

  filterProducts(category: string, city: string, range: number) : void {
   const result = this.pageData.filterProducts(category,city,range);
   // Assign the result directly to filteredProducts
   this.filteredProducts = result as unknown as any[];
  //  console.log('Filtered Products:', this.filteredProducts);
  //  this.filteredProducts=response;
  }

  private offcanvasService = inject(NgbOffcanvas);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  private getDismissReason(reason: any): string {
		switch (reason) {
			case OffcanvasDismissReasons.ESC:
				return 'by pressing ESC';
			case OffcanvasDismissReasons.BACKDROP_CLICK:
				return 'by clicking on the backdrop';
			default:
				return `with: ${reason}`;
		}
	}



  // Function to filter products by category
  // filterProducts(category: string, city: string, range: number) {
  //   this.isButtonActive = true;
    
  //   if (category === this.selectedCategory && city === this.selectedCity && range === this.selectedRange2) {
  //     // Reset the filter and return all products
  //     this.filteredProducts = this.products;
  //     this.selectedCategory = '';
  //     this.selectedCity = '';
  //     this.selectedRange2 = 0;
  //   } else {
  //     // Apply the filter criteria
  //     if (category) {
  //       this.filteredProducts = this.products.filter((product) => product.categories.includes(category));
  //     } else if (city) {
  //       this.filteredProducts = this.products.filter((product) => product.shippedToCities.includes(city));
  //     } else if (range > 0) {
  //       this.filteredProducts = this.products.filter((product) => product.price < range);
  //     } else {
  //       this.filteredProducts = this.products; // No filter criteria, so return all products
  //       this.selectedRange=0;
  //     }
  
  //     // Store the current filter criteria
  //     this.selectedCategory = category;
  //     this.selectedCity = city;
  //     this.selectedRange2 = range;
  //   }
  // }




  private checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 600; // Adjust the breakpoint as needed
  }
  

  toggleCheckboxes() {
    this.hideCheckboxes = !this.hideCheckboxes;
  }
  toggleCheckboxes2() {
    this.hideCheckboxes2 = !this.hideCheckboxes2;
  }
  toggleProgress() {
    this.hideProgress = !this.hideProgress;
  }

}
