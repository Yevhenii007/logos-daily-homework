import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAdminCategoryComponent } from './site-admin-category.component';

describe('SiteAdminCategoryComponent', () => {
  let component: SiteAdminCategoryComponent;
  let fixture: ComponentFixture<SiteAdminCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteAdminCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteAdminCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
