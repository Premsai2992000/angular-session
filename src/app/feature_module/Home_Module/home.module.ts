import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/modules/shared-modules/shared.module';
import { PrimeNgModule } from 'src/app/shared/modules/other-modules/primeng.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './container/home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,    
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PrimeNgModule
  ],
  declarations: [
    HomeComponent
  ],
  exports:[
    
  ]
})
export class HomeModule { }