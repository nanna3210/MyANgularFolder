import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassdemComponent } from './classdem.component';

describe('ClassdemComponent', () => {
  let component: ClassdemComponent;
  let fixture: ComponentFixture<ClassdemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassdemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassdemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
