import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CensorComponent } from './pages/works/censor-hw11-data binding, event handling, two-way binding/censor.component';
import { UserlistComponent } from './pages/works/userlist-hw12-ngStyle, ngClass, ngIf, ngFor/userlist.component';
import { TasklistComponent } from './pages/works/tasklist-hw13-@Input(), @Output(), connect parent comp with child comp/tasklist.component';
import { ContactlistComponent } from './pages/works/contactlist-hw14-pipes/contactlist.component';
import { WorksComponent } from './pages/works/works.component';
import { BlogComponent } from './pages/works/blog-hw16-services/blog.component';
import { SiteComponent } from './pages/works/site-hw17-24/site.component';
import { SiteHomeComponent } from './pages/works/site-hw17-24/pages/site-home/site-home.component';
import { SiteProductsComponent } from './pages/works/site-hw17-24/pages/site-products/site-products.component';
import { SiteBlogComponent } from './pages/works/site-hw17-24/pages/site-blog/site-blog.component';
import { SiteAboutComponent } from './pages/works/site-hw17-24/pages/site-about/site-about.component';
import { SiteAdminComponent } from './pages/works/site-hw17-24/admin/site-admin.component';
import { SiteAdminCategoryComponent } from './pages/works/site-hw17-24/admin/site-admin-category/site-admin-category.component';
import { SiteAdminProductsComponent } from './pages/works/site-hw17-24/admin/site-admin-products/site-admin-products.component';
import { SiteAdminBlogsComponent } from './pages/works/site-hw17-24/admin/site-admin-blogs/site-admin-blogs.component';
import { SiteAdminDiscountComponent } from './pages/works/site-hw17-24/admin/site-admin-discount/site-admin-discount.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'works', component: WorksComponent, children: [
      { path: '', redirectTo: 'cenzor', pathMatch: 'full' },
      { path: 'cenzor', component: CensorComponent },
      { path: 'userlist', component: UserlistComponent },
      { path: 'tasklist', component: TasklistComponent },
      { path: 'contactlist', component: ContactlistComponent },
      { path: 'blog', component: BlogComponent },
      {
        path: 'site', component: SiteComponent, children: [
          { path: '', redirectTo: 'site-home', pathMatch: 'full' },
          { path: 'site-home', component: SiteHomeComponent },
          { path: 'site-products', component: SiteProductsComponent },
          { path: 'site-blog', component: SiteBlogComponent },
          { path: 'site-about', component: SiteAboutComponent },
          {
            path: 'site-admin', component: SiteAdminComponent, children: [
              { path: '', redirectTo: 'site-admin-discounts', pathMatch: 'full' },
              { path: 'site-admin-discounts', component: SiteAdminDiscountComponent },
              { path: 'site-admin-category', component: SiteAdminCategoryComponent },
              { path: 'site-admin-products', component: SiteAdminProductsComponent },
              { path: 'site-admin-blogs', component: SiteAdminBlogsComponent }
            ]
          }
        ]
      },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
