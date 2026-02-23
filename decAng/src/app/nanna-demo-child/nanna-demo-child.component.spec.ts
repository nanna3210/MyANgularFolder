import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NannaDemoChildComponent } from './nanna-demo-child.component';

describe('NannaDemoChildComponent', () => {
  let component: NannaDemoChildComponent;
  let fixture: ComponentFixture<NannaDemoChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NannaDemoChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NannaDemoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
