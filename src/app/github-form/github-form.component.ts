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
  gitname: string;
  constructor(private MyprofileService: MyprofileService, private GithubserviceService: GithubserviceService) {

  }
  ngOnInit() {

  }
}
