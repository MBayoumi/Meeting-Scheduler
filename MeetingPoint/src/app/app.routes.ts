import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {AddComponent} from './add/add.component';
import {ListComponent} from './list/list.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ShowComponent} from './show/show.component';
export const appRoutes: Routes = [
  {
    path: 'home',
    component: AppComponent
  }, {
    path: 'add',
    component: AddComponent
  }, {
    path: 'list',
    component: ListComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'show',
    component: ShowComponent
  }
];

