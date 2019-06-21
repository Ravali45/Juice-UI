import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniorStaffComponent } from './junior-staff.component';

describe('JuniorStaffComponent', () => {
  let component: JuniorStaffComponent;
  let fixture: ComponentFixture<JuniorStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuniorStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuniorStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
