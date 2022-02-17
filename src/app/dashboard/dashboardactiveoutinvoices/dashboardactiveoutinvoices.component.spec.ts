import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardactiveoutinvoicesComponent } from './dashboardactiveoutinvoices.component';

describe('DashboardactiveoutinvoicesComponent', () => {
  let component: DashboardactiveoutinvoicesComponent;
  let fixture: ComponentFixture<DashboardactiveoutinvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardactiveoutinvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardactiveoutinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
