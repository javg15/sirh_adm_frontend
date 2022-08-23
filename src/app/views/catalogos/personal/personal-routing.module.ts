import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalIniService } from './services/personal.ini.service';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Personas'
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
export class PersonalRoutingModule { }

