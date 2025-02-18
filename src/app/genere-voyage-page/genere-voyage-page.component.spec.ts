import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenereVoyagePageComponent } from './genere-voyage-page.component';

describe('GenereVoyagePageComponent', () => {
  let component: GenereVoyagePageComponent;
  let fixture: ComponentFixture<GenereVoyagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenereVoyagePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenereVoyagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
