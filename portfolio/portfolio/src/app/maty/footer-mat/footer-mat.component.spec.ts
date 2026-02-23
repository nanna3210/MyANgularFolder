import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMatComponent } from './footer-mat.component';

describe('FooterMatComponent', () => {
  let component: FooterMatComponent;
  let fixture: ComponentFixture<FooterMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterMatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
