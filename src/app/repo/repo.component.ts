import { Component, OnInit } from '@angular/core';
import { MyprofileService } from "../myprofile.service";

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  profile: any;
  myrepos: any;
  username = "mangowilliam";

  constructor(private MyprofileService: MyprofileService) { }
  getgit() {
    this.MyprofileService.getinfo(this.username);
    this.MyprofileService.getmyRepos().subscribe(result => {
      console.log(result);
      this.myrepos = result;
    });
  }
  ngOnInit() {
    this.getgit();
  }

}
