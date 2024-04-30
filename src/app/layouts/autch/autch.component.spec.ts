import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutchComponent } from './autch.component';

describe('AutchComponent', () => {
  let component: AutchComponent;
  let fixture: ComponentFixture<AutchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
