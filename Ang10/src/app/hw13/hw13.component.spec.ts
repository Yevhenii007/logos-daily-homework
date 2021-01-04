import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw13Component } from './hw13.component';

describe('Hw13Component', () => {
  let component: Hw13Component;
  let fixture: ComponentFixture<Hw13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hw13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hw13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
