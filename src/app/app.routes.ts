import { Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PlayersregistrationComponent } from './playersregistration/playersregistration.component';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
    {
        path: '',
        component: MainContentComponent
    },
    {
        path: 'home',
        component: MainContentComponent
    },
    {
        path:'aboutus',
        component: AboutusComponent
    },
    {
        path:'contactus',
        component: ContactusComponent
    },
    {
        path:'registration',
        component: PlayersregistrationComponent
    },
    {
        path: '**',
        redirectTo: ''
    },
    {
        path: '**',
        redirectTo: ''
    }
];
