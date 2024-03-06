import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'ecommerce',
        pathMatch: 'full'
    },
    {
        path: 'ecommerce',
        loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule)
    }

];
