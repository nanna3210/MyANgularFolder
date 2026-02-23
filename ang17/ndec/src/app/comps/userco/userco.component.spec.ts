import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercoComponent } from './userco.component';

describe('UsercoComponent', () => {
  let component: UsercoComponent;
  let fixture: ComponentFixture<UsercoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsercoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
