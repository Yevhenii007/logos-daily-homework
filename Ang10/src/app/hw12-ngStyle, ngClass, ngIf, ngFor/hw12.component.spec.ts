import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw12Component } from './hw12.component';

describe('Hw12Component', () => {
  let component: Hw12Component;
  let fixture: ComponentFixture<Hw12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hw12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hw12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
