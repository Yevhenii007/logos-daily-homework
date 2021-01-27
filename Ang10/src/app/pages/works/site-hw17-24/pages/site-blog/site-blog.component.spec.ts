import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteBlogComponent } from './site-blog.component';

describe('SiteBlogComponent', () => {
  let component: SiteBlogComponent;
  let fixture: ComponentFixture<SiteBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
