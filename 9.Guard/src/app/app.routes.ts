import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { LayoutsComponent } from './layouts/layouts.component';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { checkGuard } from './check.guard';

export const routes: Routes = [
    {
        path:"",
        component:LayoutsComponent,
        // canActivateChild:[authGuard],
        canActivateChild:[()=>inject(AuthService).isAuthenticated],
        children:[
            {
                path: "",
                canDeactivate:[checkGuard],
                component:HomeComponent
            },
            {
                path: "about",
                component:HomeComponent
            },
            {
                path: "contact",
                component:HomeComponent
            },
            {
                path: "personels",
                component:HomeComponent
            }
        ]
    },
    {
        path: "login",
        component: LoginComponent
    }
];
