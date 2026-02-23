import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NannaValidComponent } from './nanna-valid.component';

describe('NannaValidComponent', () => {
  let component: NannaValidComponent;
  let fixture: ComponentFixture<NannaValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NannaValidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NannaValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
