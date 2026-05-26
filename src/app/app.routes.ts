import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { About } from './pages/about/about';
import { Profile } from './pages/profile/profile';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Users } from './pages/users/users';
import { UserDetails } from './pages/user-details/user-details';
import { Dashboard } from './pages/dashboard/dashboard';
import { Mylinks } from './pages/mylinks/mylinks';
import { Myprofile } from './pages/myprofile/myprofile';
import { Setting } from './pages/setting/setting';
import { Privatesetting } from './pages/privatesetting/privatesetting';
import { Publicsetting } from './pages/publicsetting/publicsetting';

export const routes: Routes = [
    {
        path: "", component: Home
    },
    {
        path: "login", component: Login
    },
    {
        path: "about/:name/:age", component: About
    },
    {
        path: "about/:name", component: About
    },
    {
        path: "about", component: About
    },
    {
        path: "users", component: Users
    },
    {
        path: "user-details/:id", component: UserDetails
    },

    {
        path: "profile", component: Profile
    },
    {
        path: 'dashboard', component: Dashboard

    },
    {
        path: 'mylinks', 
        //component: Mylinks,
        loadComponent:()=>import('./pages/mylinks/mylinks').then(m=>m.Mylinks),
        children: [
            { path: '', redirectTo: 'myprofile', pathMatch: 'full' },
            { path: 'myprofile', component: Myprofile },
            {
                path: 'setting', component: Setting,
                children: [

                    {path: '',redirectTo: 'privatesetting',pathMatch: 'full'},

                    { path: 'privatesetting',component: Privatesetting },

                    { path: 'publicsetting',component: Publicsetting }

                ]
            }
        ]

    },


    {
        path: "**", component: PageNotFound
    },

    // {
    //     path:"**",redirectTo:""
    // }
];
