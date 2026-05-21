import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { About } from './pages/about/about';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
    {
        path:"",component:Home
    },
    {
        path:"login",component:Login
    },
    {
        path:"about",component:About
    },
    {
        path:"profile",component:Profile
    }
];
