import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from "../githubservice.service";
import { Github } from '../user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  github: any;
  repo: any[];
  gitname: string;


  constructor(private GithubserviceService: GithubserviceService) { }
  getGit() {
    this.GithubserviceService.updategitname(this.gitname);
    this.GithubserviceService.getgitinfo().subscribe(result => {
      console.log(result);
      this.github = result;
    });
    this.GithubserviceService.getgitrepo().subscribe(repo => {
      console.log(repo);
      this.repo = repo;
    });
  }
  ngOnInit() {
  }

}
