import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchContactPipe } from './shared/pipes/search-contact.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CensorComponent } from './pages/works/censor-hw11-data binding, event handling, two-way binding/censor.component';
import { UserlistComponent } from './pages/works/userlist-hw12-ngStyle, ngClass, ngIf, ngFor/userlist.component';
import { TasklistComponent } from './pages/works/tasklist-hw13-@Input(), @Output(), connect parent comp with child comp/tasklist.component';
import { ContactlistComponent } from './pages/works/contactlist-hw14-pipes/contactlist.component';
import { WorksComponent } from './pages/works/works.component';
import { BlogComponent } from './pages/works/blog-hw16-services/blog.component';
import { SiteComponent } from './pages/works/site-hw17-24/site.component';
import { SiteHeaderComponent } from './pages/works/site-hw17-24/components/site-header/site-header.component';
import { SiteFooterComponent } from './pages/works/site-hw17-24/components/site-footer/site-footer.component';
import { SiteHomeComponent } from './pages/works/site-hw17-24/pages/site-home/site-home.component';
import { SiteProductsComponent } from './pages/works/site-hw17-24/pages/site-products/site-products.component';
import { SiteBlogComponent } from './pages/works/site-hw17-24/pages/site-blog/site-blog.component';
import { SiteAboutComponent } from './pages/works/site-hw17-24/pages/site-about/site-about.component';
import { SiteAdminComponent } from './pages/works/site-hw17-24/admin/site-admin.component';
import { SiteAdminCategoryComponent } from './pages/works/site-hw17-24/admin/site-admin-category/site-admin-category.component';
import { SiteAdminBlogsComponent } from './pages/works/site-hw17-24/admin/site-admin-blogs/site-admin-blogs.component';
import { SiteAdminProductsComponent } from './pages/works/site-hw17-24/admin/site-admin-products/site-admin-products.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchContactPipe,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CensorComponent,
    UserlistComponent,
    TasklistComponent,
    ContactlistComponent,
    WorksComponent,
    BlogComponent,
    SiteComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteHomeComponent,
    SiteProductsComponent,
    SiteBlogComponent,
    SiteAboutComponent,
    SiteAdminComponent,
    SiteAdminCategoryComponent,
    SiteAdminBlogsComponent,
    SiteAdminProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
