import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CatsistemasIniService } from './services/catsistemas.ini.service';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Zonas geográficas'
    },
    children: [
      {
        path: '',
        redirectTo: 'admin'
      },
      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatsistemasRoutingModule {}
