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
  username = "mangowilliam";

  constructor(private MyprofileService: MyprofileService) { }
  getgit() {
    this.MyprofileService.getinfo(this.username);
    this.MyprofileService.getmyinfo().subscribe(result => {
      console.log(result);
      this.profile = result;
    });
    this.MyprofileService.getmyRepos().subscribe(result => {
      console.log(result);
      this.myrepos = result;
    });
  }
  ngOnInit() {
    this.getgit();
  }

}
