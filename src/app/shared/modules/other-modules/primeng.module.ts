import { NgModule } from '@angular/core';

// primeng modules
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [   
    CardModule,
    ButtonModule,
    InputTextModule
  ],
  declarations: [],
  exports: [
    CardModule,
    ButtonModule,
    InputTextModule
  ]
})
export class PrimeNgModule { }
