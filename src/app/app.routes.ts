import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { VoyagePageComponent } from './voyage-page/voyage-page.component';
import { GenereVoyagePageComponent } from './genere-voyage-page/genere-voyage-page.component';
import { PageNonTrouveeComponent } from './page-non-trouvee/page-non-trouvee.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'generer',
        component: GenereVoyagePageComponent,
    },
    {
        path: 'voyage/:id',
        component: VoyagePageComponent,
    },
    {
        path: '404',
        component: PageNonTrouveeComponent,
    },
    {
        path: '**',
        redirectTo: '404',
    },
];
