import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtainSpinnerComponent } from './curtain-spinner.component';

describe('CurtainSpinnerComponent', () => {
  let component: CurtainSpinnerComponent;
  let fixture: ComponentFixture<CurtainSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurtainSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurtainSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
