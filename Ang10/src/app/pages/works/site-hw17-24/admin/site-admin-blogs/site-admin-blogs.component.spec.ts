import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAdminBlogsComponent } from './site-admin-blogs.component';

describe('SiteAdminBlogsComponent', () => {
  let component: SiteAdminBlogsComponent;
  let fixture: ComponentFixture<SiteAdminBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteAdminBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteAdminBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
