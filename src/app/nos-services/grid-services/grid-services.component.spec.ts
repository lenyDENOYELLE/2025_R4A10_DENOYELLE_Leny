import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridServicesComponent } from './grid-services.component';

describe('GridServicesComponent', () => {
  let component: GridServicesComponent;
  let fixture: ComponentFixture<GridServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
