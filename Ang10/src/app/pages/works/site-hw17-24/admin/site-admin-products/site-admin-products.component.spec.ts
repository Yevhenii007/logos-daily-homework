import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAdminProductsComponent } from './site-admin-products.component';

describe('SiteAdminProductsComponent', () => {
  let component: SiteAdminProductsComponent;
  let fixture: ComponentFixture<SiteAdminProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteAdminProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteAdminProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
