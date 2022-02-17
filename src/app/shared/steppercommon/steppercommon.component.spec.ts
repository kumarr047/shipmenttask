import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppercommonComponent } from './steppercommon.component';

describe('SteppercommonComponent', () => {
  let component: SteppercommonComponent;
  let fixture: ComponentFixture<SteppercommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteppercommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteppercommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
