import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { SharedModule } from '../../_shared/shared.module';

import { CatsistemasRoutingModule } from './catsistemas-routing.module';
import { CatsistemasService } from './services/catsistemas.service';

import { DataTablesModule } from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    CatsistemasRoutingModule,
    FormsModule,
    DataTablesModule,
    ModalModule.forRoot(),
    SharedModule
  ],
  declarations: [

  ],
  providers: [
    CatsistemasService
  ]
})
export class CatsistemasModule { }
