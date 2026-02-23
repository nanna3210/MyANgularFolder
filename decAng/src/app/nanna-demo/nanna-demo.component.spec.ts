import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NannaDemoComponent } from './nanna-demo.component';

describe('NannaDemoComponent', () => {
  let component: NannaDemoComponent;
  let fixture: ComponentFixture<NannaDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NannaDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NannaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
