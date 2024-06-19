import { Component, OnInit } from '@angular/core';
import { CareersSalesService } from './careers-sales.service';
import { CISales, ICareers, IcareerForm } from './models';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  careerForm: FormGroup;
  careers: ICareers[] = [];
  sales: CISales[] = [];
  users: IUser[] = [];
  Careers: ICareers[] = [];

  displayedColumns: string[] = [
    'id',
    'career',
    'details',
    'price',
    'duration',
  ];

  constructor(
    private fb: FormBuilder,
    private careersSalesService: CareersSalesService,
    private careersService: CareersService,
    private usersService: UsersService
  ) {
    this.careerForm = this.fb.group({
      career: this.fb.control<ICareers | null>(null, Validators.required),
      details: this.fb.control<string | null>(null, Validators.required),
      price: this.fb.control<string | number | null>(null, Validators.required),
      duration: this.fb.control<string | null>(null, Validators.required),
      user: this.fb.control<IUser | null>(null, Validators.required)
    });
  };

  ngOnInit(): void {
    this.loadSales();
    this.loadCareers();
    this.loadUsers();
  };

  SignUp() {
   this.careersSalesService.createSales(this.careerForm.getRawValue());
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
