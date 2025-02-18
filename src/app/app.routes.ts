import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { VoyagePageComponent } from './voyage-page/voyage-page.component';
import { GenereVoyagePageComponent } from './genere-voyage-page/genere-voyage-page.component';

export const routes: Routes = [
    {
        component: HomePageComponent,
        path: '',
    },
    {
        component: VoyagePageComponent,
        path: 'voyage',
    },
    {
        component: GenereVoyagePageComponent,
        path: 'generer',
    },
];
