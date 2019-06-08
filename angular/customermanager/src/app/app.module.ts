import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { CanActivateGaurd } from './customer/canactivategaurd';
import { CanDeactivateGaurd } from './customer/candeactivategaurd';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
  ],
  providers:[CanActivateGaurd,CanDeactivateGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
