import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/modules/shared-modules/shared.module';
import { PrimeNgModule } from 'src/app/shared/modules/other-modules/primeng.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './container/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,    
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PrimeNgModule,
    HttpClientModule
  ],
  declarations: [
    LoginComponent
  ],
  exports:[
    
  ]
})
export class LoginModule { }