import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';*/
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';


// Import Containers
import { DefaultLayoutComponent,PublicLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { RegisterComponent } from './register/register.component';


import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [

  /*{ path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },*/
  /*{ path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },*/
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  

  {
    path: '',
    canActivate: [AuthGuard],
    component: DefaultLayoutComponent,
    data: {
      title: 'Inicio'
    },
    children: [
      {
          path: 'register',
          component: RegisterComponent,
          data: {
            title: 'Register Page'
          }
      },
      { path: 'home', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      
      {
        path: 'catalogos/catzonageografica',
        loadChildren: () => import('./views/catalogos/catzonageografica/catzonageografica.module').then(m => m.CatzonageograficaModule)
      },
      
      {
        path: 'catalogos/personal',
        loadChildren: () => import('./views/catalogos/personal/personal.module').then(m => m.PersonalModule)
      },
      
      {
        path: 'autenticacion',
        loadChildren: () => import('./views/autenticacion/autenticacion.module').then(m => m.AutenticacionModule)
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { useHash: true })], //reload no marque error
  exports: [RouterModule]
})
export class AppRoutingModule { }
