import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'; 

import { AppHttpService } from './app-http.service';

import { UsersModule } from './users/users.module';
import { MilitaresModule } from './militares/militares.module';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    UsersModule,
    MilitaresModule,
    HttpClientModule
  ],
  providers: [AppHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
