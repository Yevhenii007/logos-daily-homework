import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAdminDiscountComponent } from './site-admin-discount.component';

describe('SiteAdminDiscountComponent', () => {
  let component: SiteAdminDiscountComponent;
  let fixture: ComponentFixture<SiteAdminDiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteAdminDiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteAdminDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
