import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatToursComponent } from './boat-tours.component';

describe('BoatToursComponent', () => {
  let component: BoatToursComponent;
  let fixture: ComponentFixture<BoatToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatToursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
