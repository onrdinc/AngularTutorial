import { Route, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './login/login.component';

export const homeRoute: Route = {
    path: "",
    component: HomeComponent
}

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path: "",
        component: LayoutsComponent,
        children: [
            homeRoute,
            {
                path: "home",
                component: HomeComponent
            },
            {
                //path kısmında about yazarsa component olarak about componenti aç
                path: "about",
                component: AboutComponent
            },
            {
                path: "contact",
                component: ContactComponent
            },
            {
                //adres çubugunda parametre gönderiliyor
                // path:"contact/:params/:id",
                path: "contact/:params",
                component: ContactComponent
            }
        ]
    }
];