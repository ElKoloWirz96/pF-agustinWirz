import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-autch',
  templateUrl: './autch.component.html',
  styleUrl: './autch.component.scss'
})
export class AutchComponent implements OnDestroy, OnInit {

  authUserChangeSubscription?: Subscription;

  constructor(private AuthService: AuthService, private router: Router) {}
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

  login() {
    this.AuthService.login();
  }
}
