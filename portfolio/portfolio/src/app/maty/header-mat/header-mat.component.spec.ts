import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMatComponent } from './header-mat.component';

describe('HeaderMatComponent', () => {
  let component: HeaderMatComponent;
  let fixture: ComponentFixture<HeaderMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
