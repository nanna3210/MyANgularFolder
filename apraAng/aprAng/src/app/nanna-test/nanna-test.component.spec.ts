import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NannaTestComponent } from './nanna-test.component';

describe('NannaTestComponent', () => {
  let component: NannaTestComponent;
  let fixture: ComponentFixture<NannaTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NannaTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NannaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
