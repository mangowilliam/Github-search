import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { GithubComponent } from './github/github.component';
import { DateCountPipe } from './date-count.pipe';
import { ColorDirective } from './color.directive';
import { RouteComponent } from './route/route.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubserviceService } from './githubservice.service';
import { MyprofileService } from './myprofile.service';



@NgModule({
  declarations: [
    AppComponent,
    GithubFormComponent,
    GithubComponent,
    DateCountPipe,
    ColorDirective,
    RouteComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [GithubserviceService, MyprofileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
