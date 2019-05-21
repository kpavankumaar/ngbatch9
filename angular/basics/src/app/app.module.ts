import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const route:Routes = [
  {path:'', redirectTo:'reactiveform',pathMatch:'full'},
  {path:'templatedriven',component:TemplatedrivenformComponent},
  {path:'reactiveform',component:ReactiveformComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    TemplatedrivenformComponent,
    ReactiveformComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
