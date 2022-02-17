import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardactivebookingsComponent } from './dashboardactivebookings.component';

describe('DashboardactivebookingsComponent', () => {
  let component: DashboardactivebookingsComponent;
  let fixture: ComponentFixture<DashboardactivebookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardactivebookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardactivebookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
