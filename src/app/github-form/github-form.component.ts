import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from "../githubservice.service";
import { Github } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {

  query: any;
  github: any[];
  repo: any[];
  profile: any;
  gitname: string;

  constructor(private GithubserviceService: GithubserviceService) { }
  getGit(query) {
    alert(query)
    var link = "https://api.github.com/users/" + query;
    alert(link);


    this.GithubserviceService.getgitinfo().subscribe(result => {
      this.profile = result;
      alert(this.profile)
      //   console.log(github);
      //   this.github = github;
    });
    // this.GithubserviceService.getgitrepo().subscribe(repo => {
    //   console.log(repo);
    //   this.repo = repo;
    // });
  }

  ngOnInit() {
  }

}
