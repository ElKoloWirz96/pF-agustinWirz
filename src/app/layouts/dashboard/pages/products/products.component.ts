import { Component,Inject } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  [x: string]: any;

  displayedColumns = [
    'id',
    'name',
    'price',
    'actions'
  ];

  // products: IProduct[] = [];

  constructor(
    //private productsService: ProductsService,
    //@Inject(API_URL) private apiUrl: string,
    //@Inject(RANDOM_NUMBER) private randomNumber: number,
    //@Inject(PRODUCTS) public products: IProduct[],
    //private alertsService: AlertsService
  ) {
    
    this['alertsService'].notifier$.subscribe({
      next: (message: any) => console.log(message),
    });
  }

  ngOnInit(): void {
    // this.products = this.productsService.getProducts();
  }
}
