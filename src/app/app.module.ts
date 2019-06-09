import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { GithubComponent } from './github/github.component';
import { DateCountPipe } from './date-count.pipe';
import { ColorDirective } from './color.directive';
import { RouteComponent } from './route/route.component';


@NgModule({
  declarations: [
    AppComponent,
    GithubFormComponent,
    GithubComponent,
    DateCountPipe,
    ColorDirective,
    RouteComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
