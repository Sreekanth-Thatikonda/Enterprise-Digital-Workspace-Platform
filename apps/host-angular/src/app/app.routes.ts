import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => loadRemoteModule('remote-angular-admin', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'reports',
    loadComponent: () => loadRemoteModule('remote-angular-reports', './Component').then((m) => m.AppComponent),
  },
  // React routes will need a wrapper, placeholding for now
  {
      path: 'hr',
      loadComponent: () => import('./wrappers/react-wrapper.component').then(m => m.ReactWrapperComponent),
      data: { remote: 'remote-react-hr', exposedModule: './App' }
  },
  {
      path: 'finance',
      loadComponent: () => import('./wrappers/react-wrapper.component').then(m => m.ReactWrapperComponent),
      data: { remote: 'remote-react-finance', exposedModule: './App' }
  }
];
