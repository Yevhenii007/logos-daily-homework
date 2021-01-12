import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw11Component } from './hw11.component';

describe('Hw11Component', () => {
  let component: Hw11Component;
  let fixture: ComponentFixture<Hw11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hw11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hw11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
