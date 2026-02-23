import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempltformComponent } from './templtform.component';

describe('TempltformComponent', () => {
  let component: TempltformComponent;
  let fixture: ComponentFixture<TempltformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempltformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempltformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
