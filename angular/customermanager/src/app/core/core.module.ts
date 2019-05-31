import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http";
import { DataService } from './service/data.service';
import { RouterModule } from '@angular/router';
import { AuthService } from './service/auth.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers:[DataService,AuthService],
  declarations: [NavbarComponent],
  exports:[NavbarComponent]
})
export class CoreModule { }
