import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortByDirective } from './directives/sortby.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SortByDirective,CapitalizePipe],
  exports:[SortByDirective,CapitalizePipe],
})
export class SharedModule { 
  constructor(){
    console.log("SharedModule");
  }
}


