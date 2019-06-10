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
  myprofile: any;
  myrepos: any;


  constructor(private MyprofileService: MyprofileService) {
    this.MyprofileService.getmyinfo().subscribe(myprofile =>){
      console.log(myprofile);
      this.myprofile = myprofile;
    });
    this.MyprofileService.getmyRepos().subscribe(myrepos =>){
      console.log(myrepos);
      this.myrepos = myrepos;
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
