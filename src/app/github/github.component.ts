import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from "../githubservice.service";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  github: any[];
  repos: any[];
  gitname: string;

  constructor(private GithubserviceService: GithubserviceService) { }
  getGit() {
    this.GithubserviceService.updategitname(this.gitname);
    this.GithubserviceService.getgitinfo().subscribe(Githubservice => {
      console.log(Githubservice);
      this.Githubservice = Githubservice;
    })
  }
  ngOnInit() {
  }

}
