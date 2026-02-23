import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahadevComponent } from './mahadev.component';

describe('MahadevComponent', () => {
  let component: MahadevComponent;
  let fixture: ComponentFixture<MahadevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahadevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MahadevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
