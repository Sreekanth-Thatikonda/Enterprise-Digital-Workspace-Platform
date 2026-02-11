import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.component').then(m => m.SignupComponent)
  },
  {
    path: 'admin',
    loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5003/remoteEntry.js',
        exposedModule: './Component'
    }).then((m) => m.AppComponent),
  },
  {
    path: 'reports',
    loadComponent: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5004/remoteEntry.js',
        exposedModule: './Component'
    }).then((m) => m.AppComponent),
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
