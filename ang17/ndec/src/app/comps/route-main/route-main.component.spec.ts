import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteMainComponent } from './route-main.component';

describe('RouteMainComponent', () => {
  let component: RouteMainComponent;
  let fixture: ComponentFixture<RouteMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
