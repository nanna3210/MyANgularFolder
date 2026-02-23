import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NannatestComponent } from './nannatest.component';

describe('NannatestComponent', () => {
  let component: NannatestComponent;
  let fixture: ComponentFixture<NannatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NannatestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NannatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
