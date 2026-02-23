import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvntbindComponent } from './evntbind.component';

describe('EvntbindComponent', () => {
  let component: EvntbindComponent;
  let fixture: ComponentFixture<EvntbindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvntbindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvntbindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
