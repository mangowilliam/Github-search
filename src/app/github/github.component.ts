import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from "../githubservice.service";
import { Github } from '../user';
import { MyprofileService } from "../myprofile.service";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  profile: any;
  myrepos: any;
  username: string;


  constructor(private MyprofileService: MyprofileService) { }
  myprofile() {
    this.MyprofileService.getmyinfo().subscribe(result => {
      console.log(result);
      this.profile = result;
    });
  }
  myrepo() {
    this.MyprofileService.getmyRepos().subscribe(result => {
      console.log(result);
      this.myrepos = result;
    });
  }

  // getGit() {
  //   this.GithubserviceService.updategitname(this.gitname);
  //   this.GithubserviceService.getgitinfo().subscribe(result => {
  //     console.log(result);
  //     this.github = result;
  //   });
  //   this.GithubserviceService.getgitrepo().subscribe(repo => {
  //     console.log(repo);
  //     this.repo = repo;
  //   });
  // }
  ngOnInit() {
  }

}
