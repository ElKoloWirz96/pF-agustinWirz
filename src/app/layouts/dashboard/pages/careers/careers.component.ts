import { Component, OnInit } from '@angular/core';
import { CareersSalesService } from './careers-sales.service';
import { CISales, ICareers } from './models';
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent implements OnInit {

  isLoading = false

  careerForm = new FormGroup({
    career: new FormControl(null),
    details: new FormControl(null),
    price: new FormControl(null),
    duration: new FormControl(null),
  });

  displayedColumns: string[] = [
    'id',
    'career',
    'details',
    'price',
    'duration',
  ];

  Careers: ICareers[] = [];

  sales: CISales[] = [];

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
