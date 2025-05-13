import { Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PlayersregistrationComponent } from './playersregistration/playersregistration.component';
import { MainContentComponent } from './main-content/main-content.component';
import { homeEntryGuard } from './guards/home-entry.guard';

export const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: MainContentComponent
    },
    {
        path:'aboutus',
        component: AboutusComponent,
        canActivate: [homeEntryGuard]
    },
    {
        path:'contactus',
        component: ContactusComponent,
        canActivate: [homeEntryGuard]
    },
    {
        path:'registration',
        component: PlayersregistrationComponent,
        canActivate: [homeEntryGuard]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
