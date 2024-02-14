import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/about/about/about.component';
import { ContactusComponent } from './components/contactus/contactus/contactus.component';
import { FacilitiesComponent } from './components/facilities/facilities/facilities.component';
import { ServiceComponent } from './components/service/service/service.component';
import { BrchureComponent } from './components/brchure/brchure.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact-us', component: ContactusComponent},
    {path: 'facilities', component: FacilitiesComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'brchure', component: BrchureComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];