import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginData } from './models';


@Component({
  selector: 'app-autch',
  templateUrl: './autch.component.html',
  styleUrl: './autch.component.scss'
})
export class AutchComponent implements OnDestroy, OnInit {

  authUserChangeSubscription?: Subscription;

  loginForm: FormGroup;

  constructor(private AuthService: AuthService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.subscribeToAuthUserChange();
  }
  ngOnDestroy(): void {
    this.authUserChangeSubscription?.unsubscribe();

  }

  subscribeToAuthUserChange(): void {
    this.authUserChangeSubscription = this.AuthService.authUser$.subscribe({
      next: (authUser) => {
        if (authUser != null) {
          this.router.navigate(['dashboard'])
        }
      }
    })
  }

  login(data: LoginData): void {
    if (this.loginForm.invalid) {
        this.loginForm.markAllAsTouched();
    } else {
        this.AuthService.login(this.loginForm.getRawValue());
    }
  }
}
