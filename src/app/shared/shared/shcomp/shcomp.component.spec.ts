import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShcompComponent } from './shcomp.component';

describe('ShcompComponent', () => {
  let component: ShcompComponent;
  let fixture: ComponentFixture<ShcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
