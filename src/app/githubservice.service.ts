import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {
  private gitname: string;
  private accesstoken = 'a1d58f9a608658bfff9369b3fe529d8bc5fa8986';


  constructor(private http: Http) {
    console.log("Service Ready")
    this.gitname = "mangowilliam";
  }
  getgitinfo() {
    return this.http.get("https://api.github.com/users/" + this.gitname + "?access_token=" + this.accesstoken)
      .map(res => res.json)
  }
  getgitrepo() {
    return this.http.get("https://api.github.com/users/" + this.gitname + "/repo?access_token=" + this.accesstoken)
      .map(res => res.json());
  }
  updategitname(gitname: string) {
  this.gitname = gitname;
  }
}
