import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonGenererComponent } from './bouton-generer.component';

describe('BoutonGenererComponent', () => {
  let component: BoutonGenererComponent;
  let fixture: ComponentFixture<BoutonGenererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonGenererComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoutonGenererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
