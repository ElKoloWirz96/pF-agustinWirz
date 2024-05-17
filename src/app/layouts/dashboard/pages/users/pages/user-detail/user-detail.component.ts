import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  constructor(private activatedRoute: ActivatedRoute) {
    
    this.activatedRoute.params.subscribe({
      next: (v) => console.log(v),
    });

    console.log(this.activatedRoute.snapshot.params['id']);
    
  }
}
