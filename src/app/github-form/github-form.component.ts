import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from "../githubservice.service";
import { Github } from '../user';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {

  username: string;
  github: string;
  repo: any;
  profile: any;
  gitname: any;
  constructor(){}
  // constructor(private GithubserviceService: GithubserviceService, private http: HttpClient) { }


  // getGit() {
  //   this.GithubserviceService.getgitinfo(this.github).subscribe(result => {
  //     this.gitname = result;
  //     console.log(this.github);
  //   });
  // }
  ngOnInit() {
  }

}
