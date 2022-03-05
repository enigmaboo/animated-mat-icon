import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedMatIconComponent } from './animated-mat-icon.component';

describe('AnimatedMatIconComponent', () => {
  let component: AnimatedMatIconComponent;
  let fixture: ComponentFixture<AnimatedMatIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedMatIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedMatIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
