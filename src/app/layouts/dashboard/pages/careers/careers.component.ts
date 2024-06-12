import { Component, OnInit } from '@angular/core';
import { CareersSalesService } from './careers-sales.service';
import { CISales, ICareers } from './models';
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';
import { CareersService } from '../../../../core/service/careers.service';
import { UsersService } from '../users/users.service';
import { IUser } from '../users/models';

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
    user: new FormControl(null),
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

  users: IUser[] = [];

  constructor(
    private careersSalesService: CareersSalesService,
    private careersService: CareersService,
    private usersService: UsersService
  ) {};

  ngOnInit(): void {
    this.loadSales();
    this.loadCareers();
    this.loadUsers();
  };

  SignUp () {
    this.careersSalesService.createSales(
      this.careerForm.value
    ).subscribe(
      (data) => {
        this.careerForm.reset();
      }
    )

    this.loadSales();
  }

  loadUsers () {
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      }
    })
  }

  loadCareers () {
    this.Careers = this.careersService.getCareers();
  }

  loadSales() {
    this.isLoading= true;
    this.careersService.getCareers()
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
