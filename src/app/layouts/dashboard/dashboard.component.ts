import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';
import { Observable } from 'rxjs/internal/Observable';
import { IUser } from './pages/users/models';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {
[x: string]: any;

  showFiller = false;

  mostrarComponent = true;

  authUser$: Observable<IUser | null>;

  authUserSinPipe: IUser | null = null;
  authUserSubscription?: Subscription;

  constructor(private authService: AuthService, private router: Router) {
    this.authUser$ = this.authService.authUser$;
  }
  ngOnDestroy(): void {
    this.authUserSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.authUserSubscription = this.authService.authUser$.subscribe({
      next: (user) => {
        this.authUserSinPipe = user;
      },
    });
  }

  logout(): void {
    this.authService['logout']();
    this.router.navigate(['auth']);
  }

  isMobile(): boolean {
    return window.innerWidth <= 290;
  }
}
