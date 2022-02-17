import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardactivequotesComponent } from './dashboardactivequotes.component';

describe('DashboardactivequotesComponent', () => {
  let component: DashboardactivequotesComponent;
  let fixture: ComponentFixture<DashboardactivequotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardactivequotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardactivequotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
