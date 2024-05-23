import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-autch',
  templateUrl: './autch.component.html',
  styleUrl: './autch.component.scss'
})
export class AutchComponent implements OnDestroy {

  authUserChangeSubscription?: Subscription;

  constructor(private AuthService: AuthService, private router: Router) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  subscribeToAuthUserChange(): void {
    this.authUserChangeSubscription = this.AuthService.authUser$.subscribe({
      next: (authUser) => {
        if (authUser != null) {
          this.router.navigate(['dashboard', 'home'])
        }
      }
    })
  }

  login() {
    this.AuthService.login();
  }
}
