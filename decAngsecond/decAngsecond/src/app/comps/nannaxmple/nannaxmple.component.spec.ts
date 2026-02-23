import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NannaxmpleComponent } from './nannaxmple.component';

describe('NannaxmpleComponent', () => {
  let component: NannaxmpleComponent;
  let fixture: ComponentFixture<NannaxmpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NannaxmpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NannaxmpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
