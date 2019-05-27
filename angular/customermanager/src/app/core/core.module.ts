import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http";
import { DataService } from './service/data.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[DataService],
  declarations: [NavbarComponent],
  exports:[NavbarComponent]
})
export class CoreModule { }
