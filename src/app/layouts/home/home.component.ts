import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IUser } from '../dashboard/pages/users/models';
import { AuthService } from '../../core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  authUser$: Observable<IUser | null>;

  authUserSinPipe: IUser | null = null;
  authUserSubscription?: Subscription;

  constructor(private authService: AuthService, private router: Router) {
    this.authUser$ = this.authService.authUser$;
  }

  logout(): void {
    this.authService['logout']();
    this.router.navigate(['autch']);
  }

}
