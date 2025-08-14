import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { About } from './Pages/about/about';
import { NotFound } from './Pages/not-found/not-found';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'about', component: About},
    {path: 'not-found', component: NotFound},
    {path: '**', redirectTo: 'not-found'},
];
