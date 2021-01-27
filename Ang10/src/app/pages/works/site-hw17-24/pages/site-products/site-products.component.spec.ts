import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteProductsComponent } from './site-products.component';

describe('SiteProductsComponent', () => {
  let component: SiteProductsComponent;
  let fixture: ComponentFixture<SiteProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
