import { Routes } from '@angular/router';
import { HomeComponent } from '../components/templates/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'produtos',
    pathMatch: 'full',
  },
  {
    path: 'produtos',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../features/produtos/pages/produtos/produtos.component').then(
            (m) => m.ProdutosComponent
          ),
      },
      {
        path: 'cadastro',
        loadComponent: () =>
          import('../features/produtos/pages/produto/produto.component').then(
            (m) => m.ProdutoComponent
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('../features/produtos/pages/produto/produto.component').then(
            (m) => m.ProdutoComponent
          ),
      },
      {
        path: 'editar/:id',
        loadComponent: () =>
          import('../features/produtos/pages/produto/produto.component').then(
            (m) => m.ProdutoComponent
          ),
      },
    ],
  },
];
