import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTechnologyComponent } from './dashboard-technology.component';

describe('DashboardTechnologyComponent', () => {
  let component: DashboardTechnologyComponent;
  let fixture: ComponentFixture<DashboardTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
