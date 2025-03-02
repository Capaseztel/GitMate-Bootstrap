import { Routes } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {LoginComponent} from './login/login.component';
import {ServidorComponent} from './servidor/servidor.component';

export const routes: Routes = [
  {path: "", component: WelcomePageComponent},
  {path: "main", component: MainPageComponent},
  {path: "login", component: LoginComponent},
  {path: "server", component: ServidorComponent},
  {path: "**", redirectTo: ""}
];
