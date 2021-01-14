import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hw11Component } from './hw11-data binding, event handling, two-way binding/hw11.component';
import { Hw12Component } from './hw12-ngStyle, ngClass, ngIf, ngFor/hw12.component';
import { Hw13Component } from './hw13-@Input(), @Output(), connect parent comp with child comp/hw13.component';
import { Hw14PipesComponent } from './hw14-pipes/hw14-pipes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchContactPipe } from './hw14-pipes/search-contact.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CensorComponent } from './pages/works/censor-hw11-data binding, event handling, two-way binding/censor.component';
import { UserlistComponent } from './pages/works/userlist-hw12-ngStyle, ngClass, ngIf, ngFor/userlist.component';
import { TasklistComponent } from './pages/works/tasklist-hw13-@Input(), @Output(), connect parent comp with child comp/tasklist.component';
import { ContactlistComponent } from './pages/works/contactlist-hw14-pipes/contactlist.component';
import { WorksComponent } from './pages/works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    Hw11Component,
    Hw12Component,
    Hw13Component,
    Hw14PipesComponent,
    SearchContactPipe,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CensorComponent,
    UserlistComponent,
    TasklistComponent,
    ContactlistComponent,
    WorksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
