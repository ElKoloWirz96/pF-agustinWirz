import { Component, OnInit } from '@angular/core';
import { CareersSalesService } from './careers-sales.service';
import { CISales } from './models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent implements OnInit {

  sales: CISales[] = [];

  isLoading = false

  constructor(private careersSalesService: CareersSalesService) {};

  ngOnInit(): void {
    this.loadSales();
  };

  loadSales() {
    this.isLoading= true;
    this.careersSalesService.getSales().subscribe({

      next: (sales) => {
        this.sales = sales;
      },

      error: (err) => {
        Swal.fire('Error', 'Ocurrio un error', 'error');
      },

      complete: () => {
        this.isLoading = false;
      },

    });
  };

}
