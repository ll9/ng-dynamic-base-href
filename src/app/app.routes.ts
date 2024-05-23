import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'news',
        loadComponent: () => import('./features/news/news-list/news-list.component').then(m => m.NewsListComponent)
    },
    {
        path: 'news/:slug',
        loadComponent: () => import('./features/news/news-detail/news-detail.component').then(m => m.NewsDetailComponent)
    }
];
