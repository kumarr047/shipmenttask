import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentshomeComponent } from './shipmentshome.component';

describe('ShipmentshomeComponent', () => {
  let component: ShipmentshomeComponent;
  let fixture: ComponentFixture<ShipmentshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
