import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RoutingModule} from './routing/routing.module';


import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { DateCountPipe } from './date-count.pipe';
import { GithubserviceService } from './githubservice.service';
import { MyprofileService } from './myprofile.service';
import { StrikethroughDirective } from './strikethrough.directive';
import { RepoComponent } from './repo/repo.component';



@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    DateCountPipe,
    StrikethroughDirective,
    RepoComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule,
    FormsModule
  ],
  providers: [GithubserviceService, MyprofileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
