
import { Routes } from '@angular/router';
import { GuiterListPageComponent } from './pages/guiter-list-page/guiter-list-page.component';
import { GuitarDetailsPageComponent } from './pages/guitar-details-page/guitar-details-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


export const routes: Routes = [

{path: '',component: GuiterListPageComponent},
{path: 'details/:guitarId',component: GuitarDetailsPageComponent},
{path: 'login',component: LoginPageComponent}





];
