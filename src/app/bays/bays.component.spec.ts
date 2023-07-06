import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaysComponent } from './bays.component';

describe('BaysComponent', () => {
  let component: BaysComponent;
  let fixture: ComponentFixture<BaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
