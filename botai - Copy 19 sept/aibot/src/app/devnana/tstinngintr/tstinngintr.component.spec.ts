import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TstinngintrComponent } from './tstinngintr.component';

describe('TstinngintrComponent', () => {
  let component: TstinngintrComponent;
  let fixture: ComponentFixture<TstinngintrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TstinngintrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TstinngintrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
