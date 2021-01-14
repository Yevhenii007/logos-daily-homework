import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CensorComponent } from './pages/works/censor-hw11-data binding, event handling, two-way binding/censor.component';
import { UserlistComponent } from './pages/works/userlist-hw12-ngStyle, ngClass, ngIf, ngFor/userlist.component';
import { TasklistComponent } from './pages/works/tasklist-hw13-@Input(), @Output(), connect parent comp with child comp/tasklist.component';
import { ContactlistComponent } from './pages/works/contactlist-hw14-pipes/contactlist.component';
import { WorksComponent } from './pages/works/works.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'works', component: WorksComponent, children: [
      { path: '', redirectTo: 'cenzor', pathMatch: 'full' },
      { path: 'cenzor', component: CensorComponent },
      { path: 'userlist', component: UserlistComponent },
      { path: 'tasklist', component: TasklistComponent },
      { path: 'contactlist', component: ContactlistComponent },
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
