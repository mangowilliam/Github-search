import { RepoComponent } from './../repo/repo.component';
import { GithubComponent } from './../github/github.component';
import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "repo", component: RepoComponent },
  { path: "github", component: GithubComponent },
  { path: "", redirectTo: "/github", pathMatch: "full" }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
