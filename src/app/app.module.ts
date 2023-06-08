import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './feature_module/Login_module/container/login.component';
import { SharedModule } from './shared/modules/shared-modules/shared.module';
import { LayoutComponent } from './core/components/layouts/layout.component';
import { LoginModule } from './feature_module/Login_module/login.module';

@NgModule({
  declarations: [
    AppComponent,LayoutComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
