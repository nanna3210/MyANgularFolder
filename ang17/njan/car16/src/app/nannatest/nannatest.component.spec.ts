import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NannatestComponent } from './nannatest.component';

describe('NannatestComponent', () => {
  let component: NannatestComponent;
  let fixture: ComponentFixture<NannatestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NannatestComponent]
    });
    fixture = TestBed.createComponent(NannatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
