import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersregistrationComponent } from './playersregistration.component';

describe('PlayersregistrationComponent', () => {
  let component: PlayersregistrationComponent;
  let fixture: ComponentFixture<PlayersregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersregistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayersregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
