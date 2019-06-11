import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from "../githubservice.service";
import { Github } from '../user';
import { MyprofileService } from '../myprofile.service';
@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {

  username: any;
  github: string;
  repo: any;
  profile: any;
  gitname: any;
  constructor(private MyprofileService: MyprofileService, private GithubserviceService: GithubserviceService) {

  }
  uprofile() {
    this.MyprofileService.getmyRepos()
  }
  // constructor(private GithubserviceService: GithubserviceService, private http: HttpClient) { }


  getGit(username) {
    this.GithubserviceService.getgitinfo(this.username).subscribe(result => {
      this.gitname = result;
      console.log(this.gitname);
    });
  }
  ngOnInit() {
  }

}
