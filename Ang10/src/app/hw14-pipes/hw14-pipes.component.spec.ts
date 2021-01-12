import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw14PipesComponent } from './hw14-pipes.component';

describe('Hw14PipesComponent', () => {
  let component: Hw14PipesComponent;
  let fixture: ComponentFixture<Hw14PipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hw14PipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hw14PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
